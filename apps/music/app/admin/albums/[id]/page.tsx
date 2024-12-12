"use client";
import {
  Button,
  Form,
  Input,
  Select,
  Textarea,
  Upload,
  UploadFile,
} from "@design/core";
import { Artist } from "@prisma/client";
import stylex from "@stylexjs/stylex";
import { useMemo, useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

type FormData = {
  title: string;
  artistId: string;
  description?: string;
  coverFiles?: UploadFile[];
};
type AlbumDTO = {
  title: string;
  artistId: string;
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
  const [keyword, setKeyword] = useState<string>("");
  const { data } = useSWR(albumId ? `/api/albums/${albumId}` : null, fetcher);
  const { trigger } = useSWRMutation(`/api/albums/${albumId}`, updater);
  const { data: artistsData } = useSWR(
    `/api/artists?keyword=${keyword}`,
    fetcher
  );
  const defaultValues: FormData = useMemo(() => {
    return {
      title: data?.data.title ?? "",
      artistId: data?.data.artist?.id ?? "",
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

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleSubmit = (data: FormData) => {
    const { title, description, coverFiles, artistId } = data;
    const newAlbum: AlbumDTO = {
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
