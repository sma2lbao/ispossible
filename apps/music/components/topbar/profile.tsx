"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import stylex from "@stylexjs/stylex";
import { Button, Avatar, Typography, Popover, Divider } from "@design/core";

const styles = stylex.create({
  popup$conent: {
    width: "320px",
    textAlign: "center",
  },
});

const Profile: React.FC = () => {
  const router = useRouter();
  const session = useSession();

  const handleSignIn = () => {
    router.push("/auth/sign-in");
  };

  const handleSignOut = () => {
    signOut();
  };

  const renderPopup = () => {
    const user = session.data!.user!;
    return (
      <div {...stylex.props(styles.popup$conent)}>
        <Avatar src={user.image!} size={56} />
        <Typography variant="body" size="lg">
          {user.name}
        </Typography>
        <Divider />
        <Button block theme="ghost" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    );
  };

  if (session.status === "loading") {
    return <Button loading theme="ghost" />;
  }

  if (session.data?.user) {
    const user = session.data?.user;
    return (
      <Popover content={renderPopup} direction="bottom-right">
        <div>
          <Avatar src={user.image!} size={56} />
          {/* <Typography variant="label" size="lg">
            {user.name}
          </Typography> */}
        </div>
      </Popover>
    );
  }

  return (
    <div>
      <Button theme="ghost" onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Profile;
