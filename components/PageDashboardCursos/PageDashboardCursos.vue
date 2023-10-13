<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Cursos", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCursosGuard>
    <PageDashboardCursosContent />
  </PageDashboardCursosGuard>
</template>