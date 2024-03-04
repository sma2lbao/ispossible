import { CategoryProvider } from "./_components/category-context";
import "normalize.css";
import "./_styles/global.css";

export const metadata = {
  title: "Blog",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <CategoryProvider>{children}</CategoryProvider>
      </body>
    </html>
  );
}
