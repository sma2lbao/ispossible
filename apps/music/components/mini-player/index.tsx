"use client";

import React, { useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { Button } from "@design/core";
import "@design/icon/step-forward-filled";
import "@design/icon/step-backward-filled";
import "@design/icon/play-circle-filled";
import "@design/icon/pause-circle-filled";

export interface MiniPlayerProps {
  song?: {
    title: string;
    sourceUrl: string;
    coverUrl?: string;
    [key: string]: unknown;
  };
}

const styles = stylex.create({
  player: {
    height: "90px",
    width: "100%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
  },
});

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const {} = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<
    "play" | "playing" | "pause" | "loading" | "ready" | "ended"
  >("loading");

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  const handleLoadedMetadata: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    console.log(e);
  };

  const handleDurationChange: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    console.log(e);
  };

  return (
    <div {...stylex.props(styles.player)}>
      <div>
        <div>
          <Button icon={<is-step-backward-filled />} />
          {status === "playing" ? (
            <Button onClick={handlePause} icon={<is-pause-circle-filled />} />
          ) : null}
          {status === "pause" || status === "ready" || status === "ended" ? (
            <Button onClick={handlePlay} icon={<is-play-circle-filled />} />
          ) : null}

          <Button icon={<is-step-forward-filled />} />
        </div>
      </div>

      <audio
        ref={audioRef}
        controls
        src="/api/upload/files/files/t-rex-roar_20241202105921.mp3"
        onPause={() => setStatus("pause")}
        onPlay={() => setStatus("play")}
        onPlaying={() => setStatus("playing")}
        onCanPlay={() => setStatus("ready")}
        onEnded={() => setStatus("ended")}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleDurationChange}
      ></audio>
    </div>
  );
};

export default MiniPlayer;
