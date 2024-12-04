import { TabPane, Tabs } from "@design/core";
import stylex from "@stylexjs/stylex";

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
          <h3>歌曲</h3>
        </TabPane>
        <TabPane tab="歌单" itemKey="playlist">
          <h3>歌单</h3>
        </TabPane>
      </Tabs>
    </div>
  );
}
