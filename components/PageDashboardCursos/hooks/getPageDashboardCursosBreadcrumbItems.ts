import { getPageDashboardBreadcrumbItems } from "../../PageDashboard/hooks/getPageDashboardBreadcrumbItems";

export const getPageDashboardCursosBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardBreadcrumbItems = getPageDashboardBreadcrumbItems();

  const dashboardCursosBreadcrumbItems = computed(() => {
    const dashboardBreadcrumbItemsValue = unref(dashboardBreadcrumbItems);

    return [
      ...dashboardBreadcrumbItemsValue,

      {
        title: "Cursos",
        disabled: route.name === "dashboard-cursos",
        to: "/dashboard/cursos/",
      },
    ];
  });

  return dashboardCursosBreadcrumbItems;
};
