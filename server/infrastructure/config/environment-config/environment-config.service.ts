import { withHttps, withoutTrailingSlash } from "ufo";
import { VERCEL_PRODUCTION_URL } from "../../../../fixtures";
import { IConfigKeycloakCredentials, IConfigOpenIDClientCredentials } from "../../../domain/config";
import { IConfig } from "../../../domain/config/IConfig";

export class EnvironmentConfigService implements IConfig {
  getNuxtAuthSecret(): string {
    const secret = process.env.AUTH_SECRET;

    if (!secret) {
      throw new Error("Please provide AUTH_SECRET.");
    }

    return secret;
  }

  getRuntimeVercelCommitURL(): string | null {
    const vercelCommitURLRaw = process.env.VERCEL_URL;
    const vercelCommitURL = vercelCommitURLRaw ? withHttps(vercelCommitURLRaw) : null;
    return vercelCommitURL;
  }

  getRuntimeVercelURL(): string | null {
    const vercelCommitURL = this.getRuntimeVercelCommitURL();

    const vercelEnv = process.env.VERCEL_ENV;

    if (vercelEnv === "production") {
      return VERCEL_PRODUCTION_URL;
    }

    return vercelCommitURL;
  }
  getRuntimeURL(): string | null {
    const vercelURL = this.getRuntimeVercelURL();

    const runtimeURLRaw = process.env.RUNTIME_URL ?? vercelURL;

    const runtimeURL = runtimeURLRaw && withoutTrailingSlash(runtimeURLRaw);

    return runtimeURL;
  }

  getKeycloakClientId(): string | undefined {
    const clientId = process.env.KEYCLOAK_ID;
    return clientId;
  }

  getKeycloakClientSecret(): string | undefined {
    const clientSecret = process.env.KEYCLOAK_SECRET;
    return clientSecret;
  }

  getKeycloakClientIssuer(): string | undefined {
    const issuer = process.env.KEYCLOAK_ISSUER;
    return issuer;
  }

  getKeycloakCredentials(): IConfigKeycloakCredentials {
    const clientId = this.getKeycloakClientId();
    const clientSecret = this.getKeycloakClientSecret();
    const issuer = this.getKeycloakClientIssuer();

    if (!clientId || !clientSecret || !issuer) {
      throw new Error("Missing Keycloak credentials");
    }

    return { clientId, clientSecret, issuer };
  }

  getOpenIDClientClientId(): string | undefined {
    const clientId = this.getKeycloakClientId();
    return clientId;
  }

  getOpenIDClientClientSecret(): string | undefined {
    const clientSecret = this.getKeycloakClientSecret();
    return clientSecret;
  }

  getOpenIDClientClientIssuer(): string | undefined {
    const issuer = this.getKeycloakClientIssuer();
    return issuer;
  }

  getOpenIDClientCredentials(): IConfigOpenIDClientCredentials {
    const clientId = this.getOpenIDClientClientId();
    const clientSecret = this.getOpenIDClientClientSecret();
    const issuer = this.getOpenIDClientClientIssuer();

    if (!clientId || !clientSecret || !issuer) {
      throw new Error("Missing OpenIDClient credentials");
    }

    return { clientId, clientSecret, issuer };
  }
}
