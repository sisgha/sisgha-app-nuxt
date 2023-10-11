export const getModalidadeNameBySlug = (slug: string) => {
  switch (slug) {
    case "tecnico-integrado": {
      return "Técnico Integrado";
    }

    case "graduacao": {
      return "Graduação";
    }

    default: {
      return `${slug}`;
    }
  }
};
