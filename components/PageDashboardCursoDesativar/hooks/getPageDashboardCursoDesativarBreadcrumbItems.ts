import { getPageDashboardCursoBreadcrumbItems } from "../../PageDashboardCurso/hooks";

export const getPageDashboardCursoDesativarBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardCursoBreadcrumbItems = getPageDashboardCursoBreadcrumbItems();

  const dashboardCursoDesativarBreadcrumbItems = computed(() => {
    const dashboardCursoBreadcrumbItemsValue = unref(dashboardCursoBreadcrumbItems);

    return [
      ...dashboardCursoBreadcrumbItemsValue,

      {
        title: "Desativar",
        disabled: route.name === "dashboard-cursos-id_curso-desativar",
        to: { name: "dashboard-cursos-id_curso-desativar" },
      },
    ];
  });

  return dashboardCursoDesativarBreadcrumbItems;
};
