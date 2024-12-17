"use client";
import useSWRMutation from "swr/mutation";
import stylex from "@stylexjs/stylex";
import {
  Button,
  Form,
  Input,
  Textarea,
  Toast,
  Upload,
  UploadFile,
} from "@design/core";
import type { CreateArtistDTO } from "@/schemas/artists";
import { createMutater } from "@/shared/fetcher";
import "@design/icon/plus";

type FormData = {
  name: string;
  bio?: string;
  imageFiles?: UploadFile[];
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

export default function CreateArtist() {
  const { trigger } = useSWRMutation(
    "/api/artists",
    createMutater<CreateArtistDTO>("POST"),
    {
      onSuccess() {
        Toast.success("创建成功");
      },
    }
  );

  const handleSubmit = (data: FormData) => {
    const { name, bio, imageFiles } = data;
    const newArtist: CreateArtistDTO = {
      name,
      bio,
      imageUrl: imageFiles?.[0].response
        ? JSON.parse(imageFiles[0].response)?.data?.url
        : undefined,
    };
    trigger(newArtist);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSubmit}>
        <Form.Field<FormData>
          label="歌手名"
          name="name"
          required
          rules={{
            required: { value: true, message: "请输入歌手名" },
          }}
        >
          <Input />
        </Form.Field>
        <Form.Field<FormData> label="歌手简介" name="bio">
          <Textarea />
        </Form.Field>
        <Form.Field<FormData> label="歌手头像" name="imageFiles">
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

        <Button type="submit">创建</Button>
      </Form>
    </div>
  );
}
