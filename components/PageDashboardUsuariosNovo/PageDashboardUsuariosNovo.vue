<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure/utils';

useAppHeadTitle("Novo Usuário", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardUsuariosNovoGuard>
    <PageDashboardUsuariosNovoContent />
  </PageDashboardUsuariosNovoGuard>
</template>