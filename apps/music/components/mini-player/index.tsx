"use client";

import React, { useEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { Avatar, Button, Col, Progress, Row } from "@design/core";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "@design/icon/step-forward-filled";
import "@design/icon/step-backward-filled";
import "@design/icon/play-circle-filled";
import "@design/icon/pause-circle-filled";
import "@design/icon/heart";

dayjs.extend(duration);

export interface MiniPlayerProps {
  song?: MiniSong;
}

export interface MiniSong {
  title: string;
  sourceUrl: string;
  coverUrl?: string;
  [key: string]: unknown;
}

const styles = stylex.create({
  player: {
    height: "90px",
    width: "100%",
    background: "#fff",
  },
  main: {
    minWidth: "400px",
  },
  controls: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "8px",
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    margin: "0 32px",
  },
  progress: {
    width: "300px",
  },
  song: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0 32px",
  },
  songTools: {
    marginTop: "4px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});

type AudioStatus =
  | "waiting"
  | "playing"
  | "play"
  | "pause"
  | "loading"
  | "ready"
  | "ended";

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const { song } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<AudioStatus>("loading");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [rawSong, setRawSong] = useState<MiniSong | undefined>(undefined);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  const handleDurationChange: React.ReactEventHandler<
    HTMLAudioElement
  > = () => {
    setDuration(audioRef.current?.duration ?? 0);
  };

  const handleTimeUpdate: React.ReactEventHandler<HTMLAudioElement> = () => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  };

  const handleCanPlay = () => {
    setStatus("ready");
    audioRef.current?.play();
  };

  const handleFavorite = () => {
    console.log("join");
  };

  useEffect(() => {
    console.log("status: ", status);
  }, [status]);

  useEffect(() => {
    if (song !== rawSong) {
      setCurrentTime(0);
      setRawSong(song);
    }
  }, [song, rawSong]);

  return (
    <>
      <Row stylex={styles.player} type="flex" align="middle">
        <Col span={8}>
          <div {...stylex.props(styles.song)}>
            <Avatar src={song?.coverUrl} shape="square" size={56} />
            <div>
              <div>
                <span>{rawSong?.title ?? "--"}</span>
                <span>- 歌手名</span>
              </div>
              <div {...stylex.props(styles.songTools)}>
                <Button
                  theme="ghost"
                  icon={<is-heart />}
                  onClick={handleFavorite}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div {...stylex.props(styles.main)}>
            <div {...stylex.props(styles.controls)}>
              <Button icon={<is-step-backward-filled />} theme="ghost" />
              {status === "playing" ? (
                <Button
                  onClick={handlePause}
                  icon={<is-pause-circle-filled />}
                  theme="ghost"
                />
              ) : null}
              {status === "pause" ||
              status === "ready" ||
              status === "ended" ? (
                <Button
                  onClick={handlePlay}
                  icon={<is-play-circle-filled />}
                  theme="ghost"
                />
              ) : null}

              <Button icon={<is-step-forward-filled />} theme="ghost" />
            </div>
            <div {...stylex.props(styles.progressContainer)}>
              <span>
                {dayjs.duration(currentTime, "seconds").format("mm:ss")}
              </span>
              <Progress
                stylex={styles.progress}
                percent={currentTime ? (currentTime / duration) * 100 : 0}
              />
              <span>{dayjs.duration(duration, "seconds").format("mm:ss")}</span>
            </div>
          </div>
        </Col>
      </Row>

      <audio
        ref={audioRef}
        src={rawSong?.sourceUrl}
        controls={false}
        preload="auto"
        onPause={() => setStatus("pause")}
        onPlay={() => setStatus("play")}
        onPlaying={() => setStatus("playing")}
        onCanPlay={handleCanPlay}
        onEnded={() => setStatus("ended")}
        onWaiting={() => setStatus("waiting")}
        onDurationChange={handleDurationChange}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </>
  );
};

export default MiniPlayer;
