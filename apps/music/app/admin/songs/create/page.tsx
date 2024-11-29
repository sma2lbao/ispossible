"use client";
import { Button, Form, Input, Upload, Toast } from "@design/core";
import stylex from "@stylexjs/stylex";
import useSWR from "swr";

type FormData = {
  title: string;
  description?: string;
  coverUrl?: string;
  sourceUrl: string;
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

const fetcher = () =>
  fetch("/api/songs", { method: "POST" }).then((response) => response.json());

function CreateSong() {
  const { isLoading, mutate } = useSWR(null, fetcher, {
    keepPreviousData: true,
    onError: (error) => {
      Toast.error(error?.message ?? "服务器繁忙~");
    },
  });
  const handleSubmit = (data: FormData) => {
    console.log("data: ", data);
    mutate(data);
    fetch("/api/songs");
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
          <Input />
        </Form.Field>
        <Form.Field label="歌曲描述" name="description">
          <Input />
        </Form.Field>
        <Form.Field label="封面图片" name="coverUrl">
          <Upload action="/api/upload/files">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>
        <Form.Field
          label="源文件"
          name="sourceUrl"
          required
          rules={{ required: "请上传源文件" }}
        >
          <Upload action="/api/upload/files">
            <Button>点击上传</Button>
          </Upload>
        </Form.Field>

        <Button type="submit" loading={isLoading}>
          创建
        </Button>
      </Form>
    </div>
  );
}

export default CreateSong;
