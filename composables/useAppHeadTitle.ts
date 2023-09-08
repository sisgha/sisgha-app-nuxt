import { HeadTitleContext } from "../utils/buildHeadTitle";

export const useAppHeadTitle = (title: string, context: HeadTitleContext | null = null) => {
  const builtTitle = buildHeadTitle(title, context);

  useHead({
    title: builtTitle,
  });
};
