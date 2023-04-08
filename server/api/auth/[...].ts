// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from "#auth";

import type IKeycloakProvider from "next-auth/providers/keycloak";
import KeycloakProvider from "next-auth/providers/keycloak";
import { getKeycloakCredentials } from "~/server/config/getKeycloadCredentials";
import { refreshAccessToken } from "~/server/oidc/refreshAccessToken";

/// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
const KCProvider: typeof IKeycloakProvider = KeycloakProvider.default;

const config = getKeycloakCredentials();

export default NuxtAuthHandler({
  providers: [
    KCProvider({
      issuer: config.issuer,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: Date.now() + <number>account.expires_in * 1000,
          user: {
            ...user,
          },
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < <number>token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      session.error = token.error;
      session.accessToken = token.accessToken;

      return session;
    },
  },
});
