<script lang="ts" setup>
import { useAppContextPageDashboardCursoContentPresentation } from './hooks';

//

const { apiActionCursoFindById } = useAppContextPageDashboardCursoContentPresentation();

//

const { result } = apiActionCursoFindById;
</script>

<template>
  <div v-if="result" class="acoes">
    <PageDashboardCursoContentPresentationActionsDeactivate />

    <PageDashboardCursoContentPresentationActionsEdit />

    <div class="flex-grow-1"></div>

    <VBtn prepend-icon="mdi-check" :to="{ name: 'dashboard-cursos' }" variant="flat" color="success">
      Concluído
    </VBtn>
  </div>
</template>

<style scoped>
.acoes {
  gap: 1rem;
  display: flex;

  align-items: stretch;

  flex-wrap: wrap;
}

@media screen and (max-width: 560px) {
  .acoes {
    flex-direction: column;
  }
}
</style>