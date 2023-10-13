<script lang="ts" setup>
import { createAppContextPageDashboardCursosContent } from './hooks/createAppContextPageDashboardCursosContent';
import { getPageDashboardCursosBreadcrumbItems } from './hooks/getPageDashboardCursosBreadcrumbItems';
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT } from './hooks/useAppContextPageDashboardCursosContent';


//

const appContextPageDashboardCursosContent = await createAppContextPageDashboardCursosContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT, appContextPageDashboardCursosContent)

//

const breadcrumbItems = getPageDashboardCursosBreadcrumbItems();

//

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardCursosContentHeader />

      <div class="my-8"></div>

      <PageDashboardCursosContentSearch />
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
