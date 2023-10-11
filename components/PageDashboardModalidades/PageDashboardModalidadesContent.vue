<script lang="ts" setup>
import { createAppContextPageDashboardModalidadesContent } from "./hooks/createAppContextPageDashboardModalidadesContent";
import { getPageDashboardModalidadesBreadcrumbItems } from "./hooks/getPageDashboardModalidadesBreadcrumbItems";
import { APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT } from "./hooks/useAppContextPageDashboardModalidadesContent";

//

const appContextPageDashboardModalidadesContent = await createAppContextPageDashboardModalidadesContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT, appContextPageDashboardModalidadesContent)

//

const breadcrumbItems = getPageDashboardModalidadesBreadcrumbItems();

//

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardModalidadesContentSearch />
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
