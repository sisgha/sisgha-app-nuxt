export type IPageDashboardModalidadesContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardModalidadesContent>>;

export const createAppContextPageDashboardModalidadesContent = async () => {
  const searchParams = reactive({
    page: 1,
    search: "",
    sortBy: [],
    itemsPerPage: 25,
  });

  return {
    searchParams,
  };
};
