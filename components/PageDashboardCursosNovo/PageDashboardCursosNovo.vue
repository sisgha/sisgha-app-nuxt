<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/app-utils';

useAppHeadTitle("Novo Curso", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCursosNovoGuard>
    <PageDashboardCursosNovoContent />
  </PageDashboardCursosNovoGuard>
</template>