<script lang="ts" setup>
import { HeadTitleContext } from '../../../infrastructure/utils';

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
})

useAppHeadTitle("Usuário", HeadTitleContext.DASHBOARD);

</script>

<template>
  <PageDashboardUsuario />
</template>
