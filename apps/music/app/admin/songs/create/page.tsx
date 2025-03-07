"use client";
import useSWRMutation from "swr/mutation";
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
import { getAudioDuration } from "@/shared/audio";
import "@design/icon/plus";
import type { CreateSongDTO } from "@/schemas/songs";
import { createMutater } from "@/shared/fetcher";
import "@design/icon/plus";

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

export default function CreateSong() {
  const { trigger } = useSWRMutation(
    "/api/songs",
    createMutater<CreateSongDTO>("POST"),
    {
      onSuccess: () => {
        Toast.success("创建成功");
      },
    }
  );
  const handleSubmit = async (data: FormData) => {
    const { title, description, sourceFiles, coverFiles, lyricFiles } = data;
    const duration = await getAudioDuration(sourceFiles[0].instance!);

    const newSong: CreateSongDTO = {
      title,
      description,
      sourceUrl: sourceFiles[0].response
        ? JSON.parse(sourceFiles[0].response)?.data?.url
        : undefined,
      coverUrl: coverFiles?.[0].response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : undefined,
      lyricUrl: lyricFiles?.[0].response
        ? JSON.parse(lyricFiles[0].response)?.data?.url
        : undefined,
      duration,
    };
    trigger(newSong);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSubmit}>
        <Form.Field
          label="歌名"
          name="title"
          required
          rules={{ required: { value: true, message: "请输入歌名" } }}
        >
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
