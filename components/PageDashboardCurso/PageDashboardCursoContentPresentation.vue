<script lang="ts" setup>
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION, createAppContextPageDashboardCursoContentPresentation } from './hooks';


//

const appContextPageDashboardCursoPresentation = await createAppContextPageDashboardCursoContentPresentation();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION, appContextPageDashboardCursoPresentation);

//

</script>

<template>
  <ResourceHandlerCursoDisplay />

  <PageDashboardCursoContentPresentationActions />

  <VDivider class="my-3" />
</template>