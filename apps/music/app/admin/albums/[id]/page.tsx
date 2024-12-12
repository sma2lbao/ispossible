"use client";
import {
  Button,
  Form,
  Input,
  Textarea,
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
};
type AlbumDTO = {
  title: string;
  description?: string;
  coverUrl?: string;
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
  return fetch(url).then((response) => response.json());
};

const updater = (url: string, { arg }: { arg: AlbumDTO }) => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};

export default function UpdateAlbum({ params }: { params: { id: string } }) {
  const albumId = params.id;
  const { data } = useSWR(albumId ? `/api/albums/${albumId}` : null, fetcher);
  const { trigger } = useSWRMutation(`/api/albums/${albumId}`, updater);

  const defaultValues: FormData = useMemo(() => {
    return {
      title: data?.data.title ?? "",
      description: data?.data.description,
      coverFiles: data?.data.coverUrl
        ? [
            {
              uid: `${Date.now()}`,
              url: data.data.coverUrl,
              status: "success",
            },
          ]
        : [],
    };
  }, [data]);

  const handleSubmit = (data: FormData) => {
    const { title, description, coverFiles } = data;
    const newAlbum: AlbumDTO = {
      title,
      description,
      coverUrl: coverFiles?.[0].response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : undefined,
    };
    trigger(newAlbum);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Form.Field
          label="专辑名"
          name="title"
          required
          rules={{
            required: { value: true, message: "请输入专辑名" },
          }}
        >
          <Input />
        </Form.Field>
        <Form.Field label="专辑简介" name="description">
          <Textarea />
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

        <Button type="submit">更新</Button>
      </Form>
    </div>
  );
}
