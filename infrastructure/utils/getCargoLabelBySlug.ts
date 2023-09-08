export const getCargoLabelBySlug = (slug: string) => {
  switch (slug) {
    case "sistema": {
      return "Sistema";
    }

    case "dape": {
      return "DAPE";
    }

    default: {
      return `${slug[0].toUpperCase()}${slug.slice(1)}`;
    }
  }
};
