import { OIDCClientProvider } from "./providers/oidc-client.provider";

export class OIDCClientService {
  constructor(
    // ...
    private oidcClientProvider: OIDCClientProvider
  ) {}

  async refreshAccessToken(token: any) {
    try {
      const client = await this.oidcClientProvider.getOpenIDClient();

      const tokenSet = await client.refresh(token.refreshToken);

      return {
        ...token,

        refreshToken: tokenSet.refresh_token,

        accessToken: tokenSet.access_token,
        accessTokenExpires: Date.now() + tokenSet.expires_in! * 1000,
      };
    } catch (error) {
      // return {
      //   ...token,
      //   error: 'RefreshAccessTokenError',
      // };

      throw error;
    }
  }
}
