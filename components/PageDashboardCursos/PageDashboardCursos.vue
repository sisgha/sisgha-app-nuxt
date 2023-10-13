<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/app-utils';

useAppHeadTitle("Cursos", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCursosGuard>
    <PageDashboardCursosContent />
  </PageDashboardCursosGuard>
</template>