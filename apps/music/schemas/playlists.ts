import { z } from "zod";

export const CreatePlaylistSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  coverUrl: z.string().optional(),
});
export type CreatePlaylistDTO = z.infer<typeof CreatePlaylistSchema>;

export const UpdatePlaylistSchema = CreatePlaylistSchema;
export type UpdatePlaylistDTO = CreatePlaylistDTO;
