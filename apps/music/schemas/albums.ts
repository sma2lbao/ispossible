import { z } from "zod";

export const CreateAlbumSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  coverUrl: z.string().optional(),
  artistId: z.string(),
});
export type CreateAlbumDTO = z.infer<typeof CreateAlbumSchema>;

export const UpdateAlbumSchema = CreateAlbumSchema;
export type UpdateAlbumDTO = CreateAlbumDTO;
