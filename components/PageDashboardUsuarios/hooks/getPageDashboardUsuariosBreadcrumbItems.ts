import { getPageDashboardBreadcrumbItems } from "../../PageDashboard/getPageDashboardBreadcrumbItems";

export const getPageDashboardUsuariosBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardBreadcrumbItems = getPageDashboardBreadcrumbItems();

  const dashboardUsuariosBreadcrumbItems = computed(() => {
    const dashboardBreadcrumbItemsValue = unref(dashboardBreadcrumbItems);

    return [
      ...dashboardBreadcrumbItemsValue,

      {
        title: "Usuários",
        disabled: route.name === "dashboard-usuarios",
        to: "/dashboard/usuarios/",
      },
    ];
  });

  return dashboardUsuariosBreadcrumbItems;
};
