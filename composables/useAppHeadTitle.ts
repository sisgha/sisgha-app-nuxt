import { HeadTitleContext } from "~/infrastructure/app-utils/HeadTitleContext";
import { buildHeadTitle } from "../infrastructure/app-utils/buildHeadTitle";

export const useAppHeadTitle = (title: string, context: HeadTitleContext | null = null) => {
  const builtTitle = buildHeadTitle(title, context);

  useHead({
    title: builtTitle,
  });
};
