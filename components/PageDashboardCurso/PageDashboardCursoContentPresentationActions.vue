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
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 560px) {
  .acoes {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>