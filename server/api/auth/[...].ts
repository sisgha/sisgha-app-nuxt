import { NuxtAuthHandler } from "#auth";
import jwt, { JwtPayload } from "jsonwebtoken";
import type ICredentialsProvider from "next-auth/providers/credentials";
import CredentialsProviderModule from "next-auth/providers/credentials";
import type IKeycloakProvider from "next-auth/providers/keycloak";
import KeycloakProviderModule from "next-auth/providers/keycloak";
import { ACCESS_TOKEN_EXPIRATION_TRIM } from "../../../infrastructure";
import { EnvironmentConfigService } from "../../infrastructure/config/environment-config";
import { OIDCClientService } from "../../infrastructure/oidc-client/oidc-client.service";
import { OIDCClientProvider } from "../../infrastructure/oidc-client/providers/oidc-client.provider";

/// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
const KeyCloakProvider: typeof IKeycloakProvider = KeycloakProviderModule.default;

/// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
const CredentialsProvider: typeof ICredentialsProvider = CredentialsProviderModule.default;

const environmentConfigService = new EnvironmentConfigService();

const oidcClientProvider = new OIDCClientProvider(environmentConfigService);
const oidcClientService = new OIDCClientService(oidcClientProvider);

const keycloakConfig = environmentConfigService.getKeycloakCredentials();

export default NuxtAuthHandler({
  secret: environmentConfigService.getNuxtAuthSecret(),

  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      id: "credentials",

      name: "Credentials",

      credentials: {
        username: { label: "Matrícula", type: "text" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(credentials, req) {
        if (credentials) {
          const { username, password } = credentials;

          const openidClient = await oidcClientProvider.getOpenIDClient();

          try {
            const token = await openidClient.grant({
              username,
              password,
              grant_type: "password",
              scope: "openid profile",
            });

            const accessToken = token.access_token;

            const data = <JwtPayload | null>(accessToken ? jwt.decode(accessToken) : null);

            const sub = data?.sub;

            if (sub) {
              return {
                id: sub,
                token,
              };
            }
          } catch (error) {
            return null;
          }
        }

        return null;
      },
    }),
    KeyCloakProvider({
      id: "sisgha-sso",
      issuer: keycloakConfig.issuer,
      clientId: keycloakConfig.clientId,
      clientSecret: keycloakConfig.clientSecret,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        // Credentials login
        if (account?.provider === "credentials") {
          const token = (user as any).token;

          return {
            user: {
              id: user.id,
            },

            accessToken: token.access_token,
            refreshToken: token.refresh_token,

            accessTokenExpires: Date.now() + <number>token.expires_in * 1000,
          };
        }

        // OAuth login
        return {
          user,

          accessToken: account.access_token,
          refreshToken: account.refresh_token,

          accessTokenExpires: Date.now() + <number>account.expires_in * 1000,
        };
      }

      const msNow = Date.now();
      const msExpires = <number>token.accessTokenExpires;

      // Return previous token if the access token has not expired yet
      if (msExpires - msNow > ACCESS_TOKEN_EXPIRATION_TRIM) {
        return token;
      }

      // Access token has expired, try to update it
      return oidcClientService.refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token.user;
      session.error = token.error;

      session.accessToken = token.accessToken;
      session.accessTokenExpires = <number>token.accessTokenExpires;

      return session;
    },
  },
});
