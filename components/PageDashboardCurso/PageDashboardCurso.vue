<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';

useAppHeadTitle("Curso", HeadTitleContext.DASHBOARD);

const route = useRoute();

const idCurso = computed(() => {
  const idCursoParam = route.params.id_curso;

  if (typeof idCursoParam === "string") {
    const asNumber = parseInt(idCursoParam);

    if (!Number.isNaN(asNumber) && asNumber > 0) {
      return asNumber;
    }
  }

  return -1;
});

provide("id_curso", idCurso);
</script>

<template>
  <PageDashboardCursoGuard>
    <PageDashboardCursoContent />
  </PageDashboardCursoGuard>
</template>