import { getPageDashboardCursoBreadcrumbItems } from "../../PageDashboardCurso/hooks";

export const getPageDashboardCursoEditarBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardCursoBreadcrumbItems = getPageDashboardCursoBreadcrumbItems();

  const dashboardCursoEditarBreadcrumbItems = computed(() => {
    const dashboardCursoBreadcrumbItemsValue = unref(dashboardCursoBreadcrumbItems);

    return [
      ...dashboardCursoBreadcrumbItemsValue,

      {
        title: "Editar",
        disabled: route.name === "dashboard-cursos-id_curso-editar",
        to: { name: "dashboard-cursos-id_curso-editar" },
      },
    ];
  });

  return dashboardCursoEditarBreadcrumbItems;
};
