"use client";

import { Avatar } from "./avatar";
import { AvatarGroup } from "./avatar-group";

type ExportAvatarType = typeof Avatar & {
  Group: typeof AvatarGroup;
};

const ExportAvatar = Avatar as ExportAvatarType;
ExportAvatar.Group = AvatarGroup;

export { ExportAvatar as Avatar };
