import SongList from "@/components/song-list";
import PlaylistGrids from "@/components/playlist-grids";

export default function Home() {
  return (
    <div>
      <PlaylistGrids />
      <SongList />
    </div>
  );
}
