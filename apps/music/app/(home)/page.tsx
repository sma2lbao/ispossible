"use client";

import stylex from "@stylexjs/stylex";
import RecentUpload from "./components/recent-upload";
import PopularPlaylists from "./components/popular-playlists";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const styles = stylex.create({
  home: {
    margin: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
});

export default function Home() {
  const session = useSession();
  const user = session.data?.user;

  useEffect(() => {
    if (user) {
      umami.identify(user!.id!, {
        name: user?.name,
        role: user?.roles,
        email: user?.email,
      });
    }
  }, [user]);

  return (
    <div {...stylex.props(styles.home)}>
      <PopularPlaylists />
      <RecentUpload />
    </div>
  );
}
