import { getPageDashboardBreadcrumbItems } from "../../PageDashboard/hooks/getPageDashboardBreadcrumbItems";

export const getPageDashboardModalidadesBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardBreadcrumbItems = getPageDashboardBreadcrumbItems();

  const dashboardModalidadesBreadcrumbItems = computed(() => {
    const dashboardBreadcrumbItemsValue = unref(dashboardBreadcrumbItems);

    return [
      ...dashboardBreadcrumbItemsValue,

      {
        title: "Modalidades de Ensino",
        disabled: route.name === "dashboard-modalidades",
        to: "/dashboard/modalidades/",
      },
    ];
  });

  return dashboardModalidadesBreadcrumbItems;
};
