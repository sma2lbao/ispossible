"use client";

import {
  Button,
  Form,
  Input,
  Textarea,
  Upload,
  type UploadFile,
} from "@design/core";
import stylex from "@stylexjs/stylex";
import { useMemo } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

type FormData = {
  name: string;
  bio?: string;
  imageFiles?: UploadFile[];
};
type ArtistDTO = {
  name: string;
  bio?: string;
  imageUrl?: string;
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
const updater = (url: string, { arg }: { arg: ArtistDTO }) => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  }).then((response) => response.json());
};

export default function UpdateArtist({ params }: { params: { id: string } }) {
  const artistId = params.id;
  const { data } = useSWR(
    artistId ? `/api/artists/${artistId}` : null,
    fetcher
  );
  const { trigger } = useSWRMutation(`/api/artists/${artistId}`, updater, {});

  const defaultValues: FormData = useMemo(() => {
    return {
      name: data?.data.name,
      bio: data?.data.bio,
      imageFiles: data?.data.imageUrl
        ? [
            {
              uid: `${Date.now()}`,
              url: data.data.imageUrl,
              status: "success",
            },
          ]
        : [],
    };
  }, [data]);

  const handleSubmit = (data: FormData) => {
    const { name, bio, imageFiles } = data;
    const newArtist: ArtistDTO = {
      name,
      bio,
      imageUrl: imageFiles?.[0]?.response
        ? JSON.parse(imageFiles[0].response)?.data?.url
        : imageFiles?.[0]?.url,
    };
    trigger(newArtist);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form<FormData> onSubmit={handleSubmit} defaultValues={defaultValues}>
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
