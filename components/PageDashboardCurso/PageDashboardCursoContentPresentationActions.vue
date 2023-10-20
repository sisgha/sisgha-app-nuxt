<script lang="ts" setup>
import { useAppContextPageDashboardCursoContentPresentation } from "./hooks";

//

const { apiActionCursoFindById } = useAppContextPageDashboardCursoContentPresentation();

//

const { result } = apiActionCursoFindById;
</script>

<template>
  <div v-if="result" class="acoes">
    <VBtn prepend-icon="mdi-chevron-left" :to="{ name: 'dashboard-cursos' }" variant="outlined" color="success"> Voltar </VBtn>

    <div class="flex-grow-1"></div>

    <PageDashboardCursoContentPresentationActionsDeactivate />

    <PageDashboardCursoContentPresentationActionsEdit />
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
