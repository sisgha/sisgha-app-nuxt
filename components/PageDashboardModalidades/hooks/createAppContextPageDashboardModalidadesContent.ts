import { useAPISearch } from "~/composables/useAPISearch";
import { APIActionModalidadeList } from "../../../infrastructure/api/api-actions";

export type IPageDashboardModalidadesContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardModalidadesContent>>;

export const createAppContextPageDashboardModalidadesContent = async () => {
  const apiSearchModalidades = await useAPISearch(APIActionModalidadeList, true, "modalidades");

  return {
    apiSearchModalidades,
  };
};
