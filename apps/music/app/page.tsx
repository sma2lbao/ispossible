"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const time = Date.now();
    fetch("/api/users", {
      method: "POST",

      body: JSON.stringify({
        name: "test" + time,
        email: "test@test.com" + time,
      }),
    });
  }, []);

  return <div>sdas</div>;
}
