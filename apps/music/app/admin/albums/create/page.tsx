"use client";
import useSWRMutation from "swr/mutation";
import stylex from "@stylexjs/stylex";
import {
  Button,
  Form,
  Input,
  Textarea,
  Upload,
  UploadFile,
} from "@design/core";

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

const fetcher = (url: string, { arg }: { arg: AlbumDTO }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};

export default function CreateAlbum() {
  const { trigger } = useSWRMutation("/api/albums", fetcher, {});

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
      <Form<FormData> onSubmit={handleSubmit}>
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
          <Upload action="/api/upload/files">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>

        <Button type="submit">创建</Button>
      </Form>
    </div>
  );
}
