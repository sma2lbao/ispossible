import Skeleton from "./skeleton";
import Avatar from "./skeleton-avatar";
import Button from "./skeleton-button";
import Image from "./skeleton-image";
import Text from "./skeleton-text";
import Title from "./skeleton-title";

type ExportSkeletonType = typeof Skeleton & {
  Avatar: typeof Avatar;
  Button: typeof Button;
  Image: typeof Image;
  Title: typeof Title;
  Text: typeof Text;
};

const ExportSkeleton = Skeleton as ExportSkeletonType;

ExportSkeleton.Avatar = Avatar;
ExportSkeleton.Image = Image;
ExportSkeleton.Button = Button;
ExportSkeleton.Title = Title;
ExportSkeleton.Text = Text;

export { ExportSkeleton as Skeleton };
