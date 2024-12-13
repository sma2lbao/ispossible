"use client";

import type { UpdateSongDTO } from "@/schemas/songs";
import { getAudioDuration } from "@/shared/audio";
import {
  Button,
  Form,
  Input,
  Textarea,
  Toast,
  Upload,
  UploadFile,
} from "@design/core";
import stylex from "@stylexjs/stylex";
import { useMemo } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

type FormData = {
  title: string;
  description?: string;
  coverFiles?: UploadFile[];
  sourceFiles: UploadFile[];
  lyricFiles?: UploadFile[];
};

const styles = stylex.create({
  content: {
    margin: "20px auto",
    width: "600px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "6px",
  },
});

const fetcher = (url: string) => {
  return fetch(url).then((respose) => respose.json());
};

const updater = (url: string, { arg }: { arg: UpdateSongDTO }) => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};

export default function UpdateSong({ params }: { params: { id: string } }) {
  const songId = params.id;
  const { data } = useSWR(songId ? `/api/songs/${songId}` : null, fetcher);
  const { trigger } = useSWRMutation(`/api/songs/${songId}`, updater, {
    onSuccess: () => {
      Toast.success("更新成功");
    },
  });

  const defaultValues: FormData = useMemo(() => {
    return {
      title: data?.data.title ?? "",
      sourceFiles: data?.data.sourceUrl
        ? [
            {
              uid: `${Date.now()}`,
              url: data?.data.sourceUrl,
              status: "success",
            },
          ]
        : [],
    };
  }, [data]);

  const handleSubmit = async (data: FormData) => {
    const { title, description, sourceFiles, coverFiles, lyricFiles } = data;
    const duration = sourceFiles[0].instance
      ? await getAudioDuration(sourceFiles[0].instance!)
      : undefined;
    const nextSong: UpdateSongDTO = {
      title,
      description,
      duration,
      sourceUrl: sourceFiles[0].response
        ? JSON.parse(sourceFiles[0].response)?.data?.url
        : sourceFiles[0].url,
      coverUrl: coverFiles?.[0].response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : coverFiles?.[0].url,
      lyricUrl: lyricFiles?.[0].response
        ? JSON.parse(lyricFiles[0].response)?.data?.url
        : lyricFiles?.[0].url,
    };

    trigger(nextSong);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Form.Field label="歌名" name="title" required>
          <Input placeholder="请输入歌名" />
        </Form.Field>
        <Form.Field label="歌曲描述" name="description">
          <Textarea placeholder="请输入" />
        </Form.Field>
        <Form.Field label="封面图片" name="coverFiles">
          <Upload
            action="/api/upload/files"
            listType="picture"
            limit={1}
            accept="image/*"
          >
            <span style={{ fontSize: "24px" }}>
              <is-plus />
            </span>
          </Upload>
        </Form.Field>
        <Form.Field
          label="源文件"
          name="sourceFiles"
          required
          rules={{ required: "请上传源文件" }}
        >
          <Upload action="/api/upload/files" accept="audio/*">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>
        <Form.Field<FormData> label="歌词文件" name="lyricFiles">
          <Upload action="/api/upload/files" accept="*.lrc">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>

        <Button type="submit">创建</Button>
      </Form>
    </div>
  );
}
