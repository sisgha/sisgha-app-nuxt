<script lang="ts" setup>
import { createAppContextPageDashboardCursoContent } from './hooks';

//

const { apiActionCursoFindById } = await createAppContextPageDashboardCursoContent();

//

const { result } = apiActionCursoFindById

//

const isActive = computed(() => unref(result)?.dateDeleted === null)
</script>

<template>
  <ResourceHandlerCursoDisplay />

  <div v-if="result" class="acoes">
    <VBtn prepend-icon="mdi-delete" :to="{ name: 'dashboard-cursos-id_curso-desativar' }" variant="outlined" color="error"
      v-if="isActive">
      Desativar
    </VBtn>


    <div class="flex-grow-1"></div>

    <VBtn prepend-icon="mdi-check" :to="{ name: 'dashboard-cursos' }" variant="flat" color="success">
      Concluído
    </VBtn>
  </div>

  <VDivider class="my-3" />
</template>

<style scoped>
.acoes {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}
</style>