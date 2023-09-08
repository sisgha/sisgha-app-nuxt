export enum HeadTitleContext {
  DAPE,
}

export const buildHeadTitle = (title: string, context: HeadTitleContext | null = null): string => {
  switch (context) {
    default:
    case null: {
      return `${title} | SISGHA`;
    }

    case HeadTitleContext.DAPE: {
      return `${title} | ${buildHeadTitle("Painel DAPE")}`;
    }
  }
};
