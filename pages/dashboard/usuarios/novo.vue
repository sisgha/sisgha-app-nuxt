<script lang="ts" setup>
import { HeadTitleContext } from '../../../infrastructure/utils/buildHeadTitle';

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
})

useAppHeadTitle("Novo Usuário", HeadTitleContext.DASHBOARD);
</script>

<template>
  <PageDashboardUsuariosNovo />
</template>

