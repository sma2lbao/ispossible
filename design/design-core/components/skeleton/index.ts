import Avatar from "./skeleton-avatar";
import Button from "./skeleton-button";
import Image from "./skeleton-image";
import Paragraph from "./skeleton-text";
import Skeleton from "./skeleton";
import Title from "./skeleton-title";

type ExportSkeletonType = typeof Skeleton & {
  Avatar: typeof Avatar;
  Button: typeof Button;
  Image: typeof Image;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const ExportSkeleton = Skeleton as ExportSkeletonType;

ExportSkeleton.Avatar = Avatar;
ExportSkeleton.Image = Image;
ExportSkeleton.Button = Button;
ExportSkeleton.Title = Title;
ExportSkeleton.Paragraph = Paragraph;

export { ExportSkeleton as Skeleton };
