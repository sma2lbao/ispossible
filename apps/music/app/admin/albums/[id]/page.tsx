"use client";
import type { UpdateAlbumDTO } from "@/schemas/albums";
import { createFetcher, createMutater } from "@/shared/fetcher";
import {
  Button,
  Form,
  Input,
  Select,
  Textarea,
  Upload,
  UploadFile,
} from "@design/core";
import { Album, Artist } from "@prisma/client";
import stylex from "@stylexjs/stylex";
import { useMemo, useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import "@design/icon/plus";

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

export default function UpdateAlbum({ params }: { params: { id: string } }) {
  const albumId = params.id;
  const [keyword, setKeyword] = useState<string>("");
  const { data } = useSWR(
    albumId ? `/api/albums/${albumId}` : null,
    createFetcher<Album>()
  );
  const { trigger } = useSWRMutation(
    `/api/albums/${albumId}`,
    createMutater<UpdateAlbumDTO>("PUT")
  );
  const { data: artistsData } = useSWR(
    `/api/artists?keyword=${keyword}`,
    createFetcher<Artist[]>()
  );
  const defaultValues: FormData = useMemo(() => {
    return {
      title: data?.data.title ?? "",
      artistId: data?.data.artistId ?? "",
      description: data?.data.description ?? "",
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

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleSubmit = (data: FormData) => {
    const { title, description, coverFiles, artistId } = data;
    const newAlbum: UpdateAlbumDTO = {
      title,
      artistId,
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
        <Form.Field<FormData>
          label="歌手"
          name="artistId"
          required
          rules={{
            required: { value: true, message: "请选择歌手" },
          }}
        >
          <Select filter onSearch={handleSearch}>
            {artistsData?.data?.map((artist: Artist) => (
              <Select.Option key={artist.id} value={artist.id}>
                {artist.name}
              </Select.Option>
            ))}
          </Select>
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
