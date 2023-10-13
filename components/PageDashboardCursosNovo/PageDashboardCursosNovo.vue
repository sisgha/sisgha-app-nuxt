<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Novo Curso", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardCursosNovoGuard>
    <PageDashboardCursosNovoContent />
  </PageDashboardCursosNovoGuard>
</template>