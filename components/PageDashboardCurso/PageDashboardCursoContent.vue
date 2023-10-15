<script lang="ts" setup>
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT, createAppContextPageDashboardCursoContent, getPageDashboardCursoBreadcrumbItems } from './hooks';

//

const appContextPageDashboardCursoContent = await createAppContextPageDashboardCursoContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT, appContextPageDashboardCursoContent);

//

const { apiActionUsuarioFindById } = appContextPageDashboardCursoContent
const { result, isErrorNotFound } = apiActionUsuarioFindById;

//

const breadcrumbItems = getPageDashboardCursoBreadcrumbItems();

//
</script>

<template>
  <PageDashboardCursoFallbackNotFound v-if="isErrorNotFound" />

  <LayoutDashboardPage v-else-if="result" :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <p>WIP: mostrar o conteúdo do curso.</p>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
