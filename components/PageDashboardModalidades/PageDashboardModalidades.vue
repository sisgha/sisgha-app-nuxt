<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Modalidades de Ensino", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardModalidadesGuard>
    <PageDashboardModalidadesContent />
  </PageDashboardModalidadesGuard>
</template>