<script lang="ts" setup>
import { useAppContextPageDashboardCurso } from '../PageDashboardCurso/hooks';

//

const { idCurso } = useAppContextPageDashboardCurso();

//

</script>

<template>
  <PageDashboardCursosGuard>
    <ResourceHandlerGuardValidIdentifier :resourceId="idCurso">
      <template #valid>
        <slot></slot>
      </template>

      <template #invalid>
        <PageDashboardCursoEditarLayout>
          <ResourceHandlerCursoGuardFallbackInvalidIdentifier />
        </PageDashboardCursoEditarLayout>
      </template>
    </ResourceHandlerGuardValidIdentifier>

  </PageDashboardCursosGuard>
</template>