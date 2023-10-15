<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Usuário", HeadTitleContext.DASHBOARD);

const route = useRoute();

const idUsuarioParam = route.params.id_usuario;

const idUsuarioRef = computed(() => {
  if (typeof idUsuarioParam === "string") {
    const asNumber = parseInt(idUsuarioParam);

    if (!Number.isNaN(asNumber) && asNumber > 0) {
      return asNumber;
    }
  }

  return -1;
});

provide("id_usuario", idUsuarioRef);
</script>

<template>
  <PageDashboardUsuarioGuard>
    <PageDashboardUsuarioContent />
  </PageDashboardUsuarioGuard>
</template>