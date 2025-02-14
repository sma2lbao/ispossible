"use client";

import type { UpdatePlaylistDTO } from "@/schemas/playlists";
import { createMutater } from "@/shared/fetcher";
import { ApiResponse } from "@/types/common";
import {
  Button,
  Form,
  Input,
  Textarea,
  Toast,
  Upload,
  type UploadFile,
} from "@design/core";
import { Playlist } from "@prisma/client";
import stylex from "@stylexjs/stylex";
import { use, useMemo } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import "@design/icon/plus";

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

export default function UpdatePlaylist({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: playlistId } = use(params);
  const { data } = useSWR<ApiResponse<Playlist>>(
    playlistId ? `/api/playlists/${playlistId}` : null
  );
  const { trigger } = useSWRMutation(
    `/api/playlists/${playlistId}`,
    createMutater<UpdatePlaylistDTO, Playlist>("PUT"),
    {
      onSuccess: () => {
        Toast.success("更新成功");
      },
    }
  );

  const defaultValues: FormData = useMemo(() => {
    return {
      name: data?.data?.name ?? "",
      description: data?.data?.description ?? "",
      coverFiles: data?.data?.coverUrl
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

  const handleSubmit = async (data: FormData) => {
    const { name, description, coverFiles } = data;
    const nextPlaylist: UpdatePlaylistDTO = {
      name,
      description,
      coverUrl: coverFiles?.[0]?.response
        ? JSON.parse(coverFiles[0].response)?.data?.url
        : coverFiles?.[0]?.url,
    };
    trigger(nextPlaylist);
  };

  return (
    <div {...stylex.props(styles.content)}>
      <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
        <Form.Field
          label="歌单名"
          name="name"
          required
          rules={{ required: { value: true, message: "请输入歌单名" } }}
        >
          <Input />
        </Form.Field>
        <Form.Field label="简介" name="description">
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

        <Button type="submit">保存</Button>
      </Form>
    </div>
  );
}
