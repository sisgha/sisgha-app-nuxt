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
  <AppAuthorizationGuard verbo="delete" recurso="curso" :entityId="idCurso" :showLoadingFallback="false"
    :showForbiddenFallback="false">
    <template #allowed>
      <VBtn prepend-icon="mdi-delete" :to="{ name: 'dashboard-cursos-id_curso-desativar' }" variant="outlined"
        color="error" v-if="isActive">
        Desativar
      </VBtn>
    </template>
  </AppAuthorizationGuard>
</template>
