export interface IConfigOpenIDClientCredentials {
  clientId: string;
  clientSecret: string;
  issuer: string;
}

export interface IConfigOpenIDClient {
  getOpenIDClientClientId(): string | undefined;
  getOpenIDClientClientSecret(): string | undefined;
  getOpenIDClientClientIssuer(): string | undefined;
  getOpenIDClientCredentials(): IConfigOpenIDClientCredentials;
}
