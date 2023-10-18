import { getPageDashboardCursosBreadcrumbItems } from "../../PageDashboardCursos/hooks";

export const getPageDashboardCursoBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardCursosBreadcrumbItems = getPageDashboardCursosBreadcrumbItems();

  const dashboardCursoBreadcrumbItems = computed(() => {
    const dashboardCursosBreadcrumbItemsValue = unref(dashboardCursosBreadcrumbItems);

    return [
      ...dashboardCursosBreadcrumbItemsValue,

      {
        title: "Curso",
        disabled: route.name === "dashboard-cursos-id_curso",
        to: { name: "dashboard-cursos-id_curso" },
      },
    ];
  });

  return dashboardCursoBreadcrumbItems;
};
