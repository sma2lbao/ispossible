"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const data = useSession();

  useEffect(() => {
    console.log(data.data?.user);
  }, [data.data?.user]);

  return (
    <div>
      <div>
        {data.data?.user?.id}
        {data.data?.user?.image}
        {data.data?.user?.email}
        {data.data?.user?.name}
      </div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
