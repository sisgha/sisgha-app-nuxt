import { getPageDashboardBreadcrumbItems } from "../../PageDashboard/hooks/getPageDashboardBreadcrumbItems";

export const getPageDashboardCalendariosBreadcrumbItems = () => {
  const route = useRoute();

  const dashboardBreadcrumbItems = getPageDashboardBreadcrumbItems();

  const dashboardCalendariosBreadcrumbItems = computed(() => {
    const dashboardBreadcrumbItemsValue = unref(dashboardBreadcrumbItems);

    return [
      ...dashboardBreadcrumbItemsValue,

      {
        title: "Calendários",
        disabled: route.name === "dashboard-calendarios",
        to: { name: "dashboard-calendarios" },
      },
    ];
  });

  return dashboardCalendariosBreadcrumbItems;
};
