"use client";

import { useState } from "react";
import { Button, Divider, Input, Layout, Typography } from "@design/core";
import { signIn, useSession } from "next-auth/react";
import stylex from "@stylexjs/stylex";
import "@design/icon/github";

const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
  },

  content: {
    display: "flex",
    alignItems: "center",
  },

  main: {
    width: "450px",
    padding: "30px 60px 0",
    marginLeft: "100px",
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
});

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingClient, setLoadingClient] = useState("");
  const session = useSession();
  const user = session.data?.user;

  const handleGithub = async () => {
    setLoadingClient("github");
    signIn("github", {
      redirectTo: "/",
    })
      .then(() => {
        umami.identify(user!.id!, {
          name: user?.name,
          role: user?.roles,
          email: user?.email,
        });
      })
      .catch(() => {
        setLoadingClient("");
      });
  };

  const handleCredentials = async () => {
    setLoadingClient("credentials");
    signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/",
    })
      .then(() => {
        umami.identify(user!.id!, {
          name: user?.name,
          role: user?.roles,
          email: user?.email,
        });
      })
      .finally(() => {
        setLoadingClient("");
      });
  };

  return (
    <Layout stylex={styles.root}>
      <Layout.Sider sticky width={400}></Layout.Sider>
      <Layout.Content stylex={styles.content}>
        <div {...stylex.props(styles.main)}>
          <Typography variant="title" size="lg">
            Sign in to Music
          </Typography>
          <Button
            icon={<is-github />}
            block
            theme="outline"
            loading={loadingClient === "github"}
            onClick={handleGithub}
          >
            Sign in with Github
          </Button>
          <Divider>or sign with email</Divider>
          <div {...stylex.props(styles.form)}>
            <div>
              <Typography variant="label" size="md">
                Email
              </Typography>
              <Input
                type="email"
                value={email}
                onChange={(value) => setEmail(value ?? "")}
              />
            </div>
            <div>
              <Typography variant="label" size="md">
                Password
              </Typography>
              <Input
                type="password"
                value={password}
                onChange={(value) => setPassword(value ?? "")}
              />
            </div>
            <Button
              block
              theme="solid"
              loading={loadingClient === "credentials"}
              onClick={handleCredentials}
            >
              Sign In
            </Button>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}
