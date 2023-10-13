import { ISlideMode } from "./ISlideMode";

export const getOffsetFromSlide = (mode: ISlideMode, value: number, limit: number) => {
  switch (mode) {
    case ISlideMode.OFFSET: {
      return value;
    }

    case ISlideMode.PAGE_INDEX_0: {
      return value * limit;
    }

    case ISlideMode.PAGE_INDEX_1: {
      return (value - 1) * limit;
    }
  }
};
