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
        <AppAuthorizationGuard verbo="delete" recurso="curso" :entityId="idCurso">
          <template #allowed>
            <slot></slot>
          </template>

          <template #forbidden>
            <PageDashboardCursoDesativarGuardFallbackNotAllowed />
          </template>
        </AppAuthorizationGuard>
      </template>

      <template #invalid>
        <PageDashboardCursoDesativarLayout>
          <ResourceHandlerCursoGuardFallbackInvalidIdentifier />
        </PageDashboardCursoDesativarLayout>
      </template>
    </ResourceHandlerGuardValidIdentifier>

  </PageDashboardCursosGuard>
</template>