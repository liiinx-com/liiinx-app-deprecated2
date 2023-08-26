"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const SignInButton = () => {
  const { data: session } = useSession();
  console.log("slient", session);

  if (session && session.user) {
    console.log("*****", session.user);
    return (
      <div>
        <p>{session?.user?.name}</p>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return <button onClick={() => signIn("google")}>sign in</button>;
};
