<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Usuários", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardUsuariosGuard>
    <PageDashboardUsuariosContent />
  </PageDashboardUsuariosGuard>
</template>