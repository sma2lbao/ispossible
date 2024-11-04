import { Typography } from "./typography";
import { TypographyLink } from "./typography-link";

type ExportTypographyType = typeof Typography & {
  Link: typeof TypographyLink;
};

const ExportTypography = Typography as ExportTypographyType;
ExportTypography.Link = TypographyLink;

export { ExportTypography as Typography };
