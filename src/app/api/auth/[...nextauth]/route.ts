import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn(userProfile: any) {
      if (!userProfile) return false;
      const {
        user: { id: googleUserId, name: displayName, email, image: photoUrl },
        account: {
          id_token: googleIdToken,
          access_token: googleAccessToken,
          token_type: tokenType,
          expires_at: expiresAt,
        },
        profile: {
          given_name: firstName,
          family_name: lastName,
          email_verified: emailVerified,
        },
      } = userProfile;

      const payload = {
        firstName,
        lastName,
        googleUserId,
        displayName,
        email,
        photoUrl,
        emailVerified,
        googleAccessToken,
        googleIdToken,
        tokenType,
        expiresAt,
      };

      const { accessToken: liiinxAccessToken } = await postData(
        "http://localhost:3003/auth/login",
        payload
      );
      console.log("liiinxAccessToken", liiinxAccessToken);

      return true;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
