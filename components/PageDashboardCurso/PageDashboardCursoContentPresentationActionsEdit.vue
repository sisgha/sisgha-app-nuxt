<script lang="ts" setup>
import { useAppContextPageDashboardCurso, useAppContextPageDashboardCursoContentPresentation } from './hooks';

//

const { idCurso } = useAppContextPageDashboardCurso();

//

const { apiActionCursoFindById } = useAppContextPageDashboardCursoContentPresentation();

//

const { result } = apiActionCursoFindById;
const isActive = computed(() => unref(result)?.dateDeleted === null)
</script>

<template>
  <AppAuthorizationGuard verbo="edit" recurso="curso" :entityId="idCurso" :showLoadingFallback="false"
    :showForbiddenFallback="false">
    <template #allowed>
      <VBtn prepend-icon="mdi-pencil" :to="{ name: 'dashboard-cursos-id_curso-editar' }" variant="outlined"
        v-if="isActive">
        Editar
      </VBtn>
    </template>
  </AppAuthorizationGuard>
</template>
