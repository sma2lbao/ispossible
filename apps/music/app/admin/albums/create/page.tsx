"use client";
import useSWRMutation from "swr/mutation";
import stylex from "@stylexjs/stylex";
import {
  Button,
  Form,
  Input,
  Select,
  Textarea,
  Toast,
  Upload,
  UploadFile,
} from "@design/core";
import "@design/icon/plus";
import useSWR from "swr";
import { useState } from "react";
import { Artist } from "@prisma/client";
import type { CreateAlbumDTO } from "@/schemas/albums";

type FormData = {
  title: string;
  artistId: string;
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

const creater = (url: string, { arg }: { arg: CreateAlbumDTO }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};

export default function CreateAlbum() {
  const { trigger, isMutating } = useSWRMutation("/api/albums", creater, {
    onSuccess() {
      Toast.success("创建成功");
    },
  });
  const [keyword, setKeyword] = useState<string>("");
  const { data } = useSWR(`/api/artists?keyword=${keyword}`);

  const handleSubmit = (data: FormData) => {
    const { title, artistId, description, coverFiles } = data;
    const newAlbum: CreateAlbumDTO = {
      title,
      artistId,
      description,
      coverUrl: coverFiles?.[0].response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : undefined,
    };
    trigger(newAlbum);
  };

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSubmit}>
        <Form.Field<FormData>
          label="专辑名"
          name="title"
          required
          rules={{
            required: { value: true, message: "请输入专辑名" },
          }}
        >
          <Input />
        </Form.Field>
        <Form.Field<FormData>
          label="歌手"
          name="artistId"
          required
          rules={{
            required: { value: true, message: "请选择歌手" },
          }}
        >
          <Select filter onSearch={handleSearch}>
            {data?.data?.map((artist: Artist) => (
              <Select.Option key={artist.id} value={artist.id}>
                {artist.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Field>
        <Form.Field<FormData> label="专辑简介" name="description">
          <Textarea />
        </Form.Field>
        <Form.Field<FormData> label="封面图片" name="coverFiles">
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

        <Button type="submit" loading={isMutating}>
          创建
        </Button>
      </Form>
    </div>
  );
}
