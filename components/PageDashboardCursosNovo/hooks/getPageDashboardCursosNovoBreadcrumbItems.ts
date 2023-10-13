import { getPageDashboardCursosBreadcrumbItems } from "../../PageDashboardCursos/hooks/getPageDashboardCursosBreadcrumbItems";

export const getPageDashboardCursosNovoBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardCursosBreadcrumbItems = getPageDashboardCursosBreadcrumbItems();

  const dashboardCursosNovoBreadcrumbItems = computed(() => {
    const dashboardCursosBreadcrumbItemsValue = unref(dashboardCursosBreadcrumbItems);

    return [
      ...dashboardCursosBreadcrumbItemsValue,

      {
        title: "Novo",
        disabled: route.name === "dashboard-cursos-novo",
        to: "/dashboard/cursos/novo/",
      },
    ];
  });

  return dashboardCursosNovoBreadcrumbItems;
};
