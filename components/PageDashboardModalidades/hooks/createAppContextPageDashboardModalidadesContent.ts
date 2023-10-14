import { useAPIActionSearch } from "../../../infrastructure";
import { APIActionModalidadeList } from "../../../infrastructure/api/api-actions";

export type IPageDashboardModalidadesContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardModalidadesContent>>;

export const createAppContextPageDashboardModalidadesContent = async () => {
  const apiSearchModalidades = await useAPIActionSearch(APIActionModalidadeList, true, "modalidades");

  return {
    apiSearchModalidades,
  };
};
