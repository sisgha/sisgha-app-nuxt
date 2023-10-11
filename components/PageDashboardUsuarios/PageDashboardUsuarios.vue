<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/app-utils';

useAppHeadTitle("Usuários", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardUsuariosGuard>
    <PageDashboardUsuariosContent />
  </PageDashboardUsuariosGuard>
</template>