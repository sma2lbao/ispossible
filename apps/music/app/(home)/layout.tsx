import Continer from "./container";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Continer>{children}</Continer>;
}
