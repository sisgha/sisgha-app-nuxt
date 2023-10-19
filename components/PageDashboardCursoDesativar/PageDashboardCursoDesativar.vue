<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO, createAppContextPageDashboardCurso } from '../PageDashboardCurso/hooks';

//


useAppHeadTitle("Desativar Curso", HeadTitleContext.DASHBOARD);

//

const appContextPageDashboardCurso = await createAppContextPageDashboardCurso();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSO, appContextPageDashboardCurso);

//
</script>

<template>
  <PageDashboardCursoDesativarGuard>
    <PageDashboardCursoDesativarContent />
  </PageDashboardCursoDesativarGuard>
</template>
