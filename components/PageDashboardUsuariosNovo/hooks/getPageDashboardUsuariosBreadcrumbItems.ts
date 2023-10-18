import { getPageDashboardUsuariosBreadcrumbItems } from "../../PageDashboardUsuarios/hooks/getPageDashboardUsuariosBreadcrumbItems";

export const getPageDashboardUsuariosNovoBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardUsuariosBreadcrumbItems = getPageDashboardUsuariosBreadcrumbItems();

  const dashboardUsuariosNovoBreadcrumbItems = computed(() => {
    const dashboardUsuariosBreadcrumbItemsValue = unref(dashboardUsuariosBreadcrumbItems);

    return [
      ...dashboardUsuariosBreadcrumbItemsValue,

      {
        title: "Novo",
        disabled: route.name === "dashboard-usuarios-novo",
        to: { name: "dashboard-usuarios-novo" },
      },
    ];
  });

  return dashboardUsuariosNovoBreadcrumbItems;
};
