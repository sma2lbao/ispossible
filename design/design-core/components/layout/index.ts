import { Layout } from "./layout";
import { Header } from "./header";
import { Sider } from "./sider";
import { Content } from "./content";
import { Footer } from "./footer";

type ExportLayoutType = typeof Layout & {
  Header: typeof Header;
  Sider: typeof Sider;
  Content: typeof Content;
  Footer: typeof Footer;
};

const ExportLayout = Layout as ExportLayoutType;
ExportLayout.Header = Header;
ExportLayout.Sider = Sider;
ExportLayout.Content = Content;
ExportLayout.Footer = Footer;

export { ExportLayout as Layout };
