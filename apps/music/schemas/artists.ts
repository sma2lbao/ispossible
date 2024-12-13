import { z } from "zod";

export const CreateArtistSchema = z.object({
  name: z.string(),
  bio: z.string().optional(),
  imageUrl: z.string().optional(),
});
export type CreateArtistDTO = z.infer<typeof CreateArtistSchema>;

export const UpdateArtistSchema = CreateArtistSchema;
export type UpdateArtistDTO = CreateArtistDTO;
