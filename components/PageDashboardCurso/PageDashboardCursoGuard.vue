<script lang="ts" setup>
import { useAppContextPageDashboardCurso } from './hooks';

//

const { idCurso } = useAppContextPageDashboardCurso();
</script>

<template>
  <PageDashboardCursosGuard>
    <ResourceHandlerGuardValidIdentifier :resourceId="idCurso">
      <template #valid>
        <slot></slot>
      </template>

      <template #invalid>
        <PageDashboardCursoLayout>
          <ResourceHandlerCursoGuardFallbackInvalidIdentifier />
        </PageDashboardCursoLayout>
      </template>
    </ResourceHandlerGuardValidIdentifier>
  </PageDashboardCursosGuard>
</template>