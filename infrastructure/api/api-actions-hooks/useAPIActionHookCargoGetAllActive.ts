import { useQuery } from "@tanstack/vue-query";
import { APIActionCargoGetAllActive } from "../api-actions";

export const useAPIActionHookCargoGetAllActive = (shouldSuspense = true) => {
  const appContextAPI = useAppContextAPI();

  const searchQuery = useQuery(
    ["cargos"],
    async () => {
      return appContextAPI.invoke(APIActionCargoGetAllActive, undefined);
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
