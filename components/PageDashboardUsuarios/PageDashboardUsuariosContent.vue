<script lang="ts" setup>
import { createAppContextPageDashboardUsuariosContent } from "./hooks/createAppContextPageDashboardUsuariosContent";
import { getPageDashboardUsuariosBreadcrumbItems } from "./hooks/getPageDashboardUsuariosBreadcrumbItems";
import { APP_CONTEXT_PAGE_DASHBOARD_USUARIOS_CONTENT } from "./hooks/useAppContextPageDashboardUsuariosContent";

//

const appContextPageDashboardUsuariosContent = await createAppContextPageDashboardUsuariosContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_USUARIOS_CONTENT, appContextPageDashboardUsuariosContent)

//

const breadcrumbItems = getPageDashboardUsuariosBreadcrumbItems();

//

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardUsuariosContentHeader />

      <div class="my-8"></div>

      <PageDashboardUsuariosContentSearch />
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
