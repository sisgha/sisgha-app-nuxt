<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/app-utils';

useAppHeadTitle("Modalidades de Ensino", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardModalidadesGuard>
    <PageDashboardModalidadesContent />
  </PageDashboardModalidadesGuard>
</template>