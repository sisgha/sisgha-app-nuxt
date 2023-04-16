import { withHttps, withoutTrailingSlash } from "ufo";

const getRuntimeVercelCommitURL = () => {
  const vercelCommitURLRaw = process.env.VERCEL_URL;
  const vercelCommitURL = vercelCommitURLRaw ? withHttps(vercelCommitURLRaw) : null;

  return vercelCommitURL;
};

const getRuntimeVercelURL = () => {
  const vercelCommitURL = getRuntimeVercelCommitURL();

  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv === "production") {
    return null;
  }

  return vercelCommitURL;
};

export const getRuntimeURL = () => {
  const runtimeVercelURL = getRuntimeVercelURL();

  const runtimeURLRaw = process.env.RUNTIME_URL ?? runtimeVercelURL;

  const runtimeURL = runtimeURLRaw && withoutTrailingSlash(runtimeURLRaw);

  return runtimeURL;
};
