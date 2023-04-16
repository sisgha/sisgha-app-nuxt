import { withHttps, withoutTrailingSlash } from "ufo";
import { VERCEL_PRODUCTION_URL } from "../../fixtures";

const getVercelCommitURL = () => {
  const vercelCommitURLRaw = process.env.VERCEL_URL;
  const vercelCommitURL = vercelCommitURLRaw ? withHttps(vercelCommitURLRaw) : null;

  return vercelCommitURL;
};

const getVercelURL = () => {
  const vercelCommitURL = getVercelCommitURL();

  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv === "production") {
    return VERCEL_PRODUCTION_URL;
  }

  return vercelCommitURL;
};

export const getRuntimeURL = () => {
  const vercelURL = getVercelURL();

  const runtimeURLRaw = process.env.RUNTIME_URL ?? vercelURL;

  const runtimeURL = runtimeURLRaw && withoutTrailingSlash(runtimeURLRaw);

  return runtimeURL;
};
