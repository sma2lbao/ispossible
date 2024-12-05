import { TabPane, Tabs } from "@design/core";
import stylex from "@stylexjs/stylex";
import FavoriteSongs from "./favorite-songs";

const styles = stylex.create({
  content: {
    margin: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
});

export default function Favorite() {
  return (
    <div {...stylex.props(styles.content)}>
      <Tabs defaultActiveKey="song">
        <TabPane tab="歌曲" itemKey="song">
          <FavoriteSongs />
        </TabPane>
        <TabPane tab="歌单" itemKey="playlist" disabled></TabPane>
      </Tabs>
    </div>
  );
}
