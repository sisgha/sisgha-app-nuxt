export const getPageDashboardBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardBreadcrumbItems = computed(() => [
    {
      title: "Painel",
      disabled: route.path === "/dashboard",
      to: "/dashboard",
    },
  ]);

  return dashboardBreadcrumbItems;
};
