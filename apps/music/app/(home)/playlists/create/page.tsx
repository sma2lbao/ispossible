"use client";
import {
  Button,
  Form,
  Input,
  Textarea,
  Toast,
  Upload,
  UploadFile,
} from "@design/core";
import stylex from "@stylexjs/stylex";
import useSWRMutation from "swr/mutation";
import "@design/icon/plus";
import { createMutater } from "@/shared/fetcher";
import type { CreatePlaylistDTO } from "@/schemas/playlists";
import type { Playlist } from "@prisma/client";

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

export default function CreatePlaylist() {
  const { trigger, isMutating } = useSWRMutation(
    "/api/playlists",
    createMutater<CreatePlaylistDTO, Playlist>("POST"),
    {
      onSuccess: () => {
        Toast.success("创建成功");
      },
    }
  );

  const handleSumbit = (data: FormData) => {
    const { name, description, coverFiles } = data;
    const newPlaylist: CreatePlaylistDTO = {
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

        <Button type="submit" loading={isMutating}>
          保存
        </Button>
      </Form>
    </div>
  );
}
