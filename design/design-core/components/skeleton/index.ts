import Avatar from "./avatar";
import Button from "./button";
import Image from "./image";
import Paragraph from "./paragraph";
import Skeleton from "./skeleton";
import Title from "./title";

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
