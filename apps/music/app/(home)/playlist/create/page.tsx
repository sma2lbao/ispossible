"use client";
import { Button, Form, Input, Toast, Upload, UploadFile } from "@design/core";
import stylex from "@stylexjs/stylex";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

type PlaylistDTO = {
  name: string;

  description?: string;

  coverUrl?: string;
};

type FormData = {
  name: string;

  description?: string;

  coverFiles?: UploadFile[];
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

const fetcher = (url: string, { arg }: { arg: PlaylistDTO }) => {
  return fetch(url, { method: "POST", body: JSON.stringify(arg) }).then((res) =>
    res.json()
  );
};

export default function CreatePlaylist() {
  const { trigger } = useSWRMutation("/api/playlist", fetcher, {
    onError: (error) => {
      Toast.error(error?.message ?? "服务器繁忙~");
    },
    onSuccess: () => {
      Toast.success("创建成功");
    },
  });
  const [] = useState();

  const handleSumbit = (data: FormData) => {
    const { name, description, coverFiles } = data;
    const newPlaylist: PlaylistDTO = {
      name,
      description,
      coverUrl: coverFiles?.[0].response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : undefined,
    };

    trigger(newPlaylist);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSumbit}>
        <Form.Field
          label="歌单名"
          name="name"
          required
          rules={{ required: { value: true, message: "请输入歌单名" } }}
        >
          <Input />
        </Form.Field>
        <Form.Field label="简介" name="description">
          <Input />
        </Form.Field>
        <Form.Field label="封面图片" name="coverFiles">
          <Upload action="/api/upload/files">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>

        <Button type="submit">保存</Button>
      </Form>
    </div>
  );
}
