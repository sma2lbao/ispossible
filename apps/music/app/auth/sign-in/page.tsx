"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  const credentialsAction = (formData: FormData) => {
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/auth/sign-out",
    });
  };
  return (
    <div>
      <div>
        <form action={credentialsAction}>
          <label htmlFor="credentials-email">
            Email
            <input type="email" id="credentials-email" name="email" />
          </label>
          <label htmlFor="credentials-password">
            Password
            <input type="password" id="credentials-password" name="password" />
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>

      <div>
        <button
          onClick={() =>
            signIn("github", {
              redirectTo: "/auth/sign-out",
            })
          }
        >
          Github
        </button>
      </div>
    </div>
  );
}
