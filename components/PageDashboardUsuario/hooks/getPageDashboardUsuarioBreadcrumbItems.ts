import { getPageDashboardUsuariosBreadcrumbItems } from "../../PageDashboardUsuarios/hooks/getPageDashboardUsuariosBreadcrumbItems";

export const getPageDashboardUsuarioBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardUsuariosBreadcrumbItems = getPageDashboardUsuariosBreadcrumbItems();

  const dashboardUsuarioBreadcrumbItems = computed(() => {
    const dashboardUsuariosBreadcrumbItemsValue = unref(dashboardUsuariosBreadcrumbItems);

    return [
      ...dashboardUsuariosBreadcrumbItemsValue,

      {
        title: "Usuário",
        disabled: route.name === "dashboard-usuarios-id_usuario",
        to: { name: "dashboard-usuarios-id_usuario" },
      },
    ];
  });

  return dashboardUsuarioBreadcrumbItems;
};
