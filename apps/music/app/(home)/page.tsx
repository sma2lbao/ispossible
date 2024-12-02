import PlaylistGrids from "@/components/playlist-grids";
import RecentUpload from "./components/recent-upload";
import stylex from "@stylexjs/stylex";

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
      <PlaylistGrids />
      <RecentUpload />
    </div>
  );
}
