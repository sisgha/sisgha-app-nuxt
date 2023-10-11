import { useQuery } from "@tanstack/vue-query";
import { getAllCargosActives } from "./get-all-cargos-actives";

export const useAPIAllCargos = (shouldSuspense = true) => {
  const appContextAPI = useAppContextAPI();

  const searchQuery = useQuery(
    ["all-cargos"],
    async () => {
      return appContextAPI.invoke(getAllCargosActives, undefined);
    },
    {
      keepPreviousData: true,
    }
  );

  if (shouldSuspense) {
    onServerPrefetch(async () => {
      await searchQuery.suspense();
    });
  }

  const data = computed(() => searchQuery.data.value ?? null);

  const items = computed(() => data.value ?? []);

  const isLoading = computed(() => searchQuery.isLoading.value);

  return {
    //
    isLoading,
    //
    data,
    items,
  };
};
