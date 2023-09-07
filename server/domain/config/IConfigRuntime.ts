export interface IConfigRuntime {
  getRuntimeVercelCommitURL(): string | null;

  getRuntimeVercelURL(): string | null;

  getRuntimeURL(): string | null;
}
