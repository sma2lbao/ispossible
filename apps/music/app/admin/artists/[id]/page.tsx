"use client";

import type { UpdateArtistDTO } from "@/schemas/artists";
import { createFetcher, createMutater } from "@/shared/fetcher";
import {
  Button,
  Form,
  Input,
  Textarea,
  Upload,
  type UploadFile,
} from "@design/core";
import { Artist } from "@prisma/client";
import stylex from "@stylexjs/stylex";
import { useMemo } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
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

export default function UpdateArtist({ params }: { params: { id: string } }) {
  const artistId = params.id;
  const { data } = useSWR(
    artistId ? `/api/artists/${artistId}` : null,
    createFetcher<Artist>()
  );
  const { trigger } = useSWRMutation(
    `/api/artists/${artistId}`,
    createMutater<UpdateArtistDTO>("PUT"),
    {}
  );

  const defaultValues: FormData = useMemo(() => {
    return {
      name: data?.data.name ?? "",
      bio: data?.data.bio ?? "",
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
    const newArtist: UpdateArtistDTO = {
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
