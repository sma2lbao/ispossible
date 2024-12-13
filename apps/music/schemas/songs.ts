import { z } from "zod";

export const CreateSongSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  sourceUrl: z.string(),
  coverUrl: z.string().optional(),
  duration: z.number().optional(),
  lyricUrl: z.string().optional(),
  artistId: z.string().optional(),
  albumId: z.string().optional(),
});
export type CreateSongDTO = z.infer<typeof CreateSongSchema>;

export const UpdateSongSchema = CreateSongSchema;
export type UpdateSongDTO = CreateSongDTO;
