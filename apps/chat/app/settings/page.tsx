"use client";

import React from "react";
import { Input, List, Typography } from "@design/core";
import stylex from "@stylexjs/stylex";
import { useSettingsStore } from "@/providers/settings-store-provider";
import Header from "../../components/header";

const styles = stylex.create({
  page: {
    width: 900,
    margin: "0 auto",
  },
  field: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  field$label$container: {
    flex: 1,
    flexShrink: 0,
    marginRight: 16,
  },
  field$main$container: {
    flex: 1,
    flexShrink: 0,
  },
});

export default function Settings() {
  const { dsApi, update } = useSettingsStore((state) => state);

  const handleDsApiChange = (value: string) => {
    update("dsApi", value);
  };

  return (
    <div {...stylex.props(styles.page)}>
      <Header title="设置" />
      <List>
        <List.Item>
          <div {...stylex.props(styles.field)}>
            <div {...stylex.props(styles.field$label$container)}>
              <Typography variant="title" size="sm">
                DeepSeek API
              </Typography>
              <Typography>
                调用的API，通过Ollama自主部署的API地址；通常为http://IP:11434/api/generate
              </Typography>
            </div>
            <div {...stylex.props(styles.field$main$container)}>
              <Input value={dsApi} onChange={handleDsApiChange} />
            </div>
          </div>
        </List.Item>
      </List>
    </div>
  );
}
