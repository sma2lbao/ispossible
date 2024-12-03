import stylex from "@stylexjs/stylex";
import RecentUpload from "./components/recent-upload";
import PopularPlaylists from "./components/popular-playlists";

const styles = stylex.create({
  home: {
    margin: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.home)}>
      <PopularPlaylists />
      <RecentUpload />
    </div>
  );
}
