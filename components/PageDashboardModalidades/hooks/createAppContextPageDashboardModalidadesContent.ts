import { useAPISearch } from "~/composables/useAPISearch";
import { listModalidade } from "../../../infrastructure/api/api-service/resources/modalidade";

export type IPageDashboardModalidadesContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardModalidadesContent>>;

export const createAppContextPageDashboardModalidadesContent = async () => {
  const apiSearchModalidades = await useAPISearch(listModalidade, true, "modalidades");

  return {
    apiSearchModalidades,
  };
};
