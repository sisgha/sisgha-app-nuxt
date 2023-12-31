import { BaseClient, Client, Issuer } from "openid-client";
import { IConfig } from "../../../domain/config";

let _cachedClient: Promise<Client> | null;

export class OIDCClientProvider {
  constructor(
    // ...
    private environmentConfigService: IConfig
  ) {}

  async buildOpenIdClient() {
    const config = this.environmentConfigService.getOpenIDClientCredentials();

    const TrustIssuer = await Issuer.discover(config.issuer);

    const client = new TrustIssuer.Client({
      client_id: config.clientId,
      client_secret: config.clientSecret,
    });

    return client;
  }

  async getOpenIDClient(): Promise<BaseClient> {
    if (!_cachedClient) {
      _cachedClient = this.buildOpenIdClient();
    }

    return _cachedClient;
  }
}
