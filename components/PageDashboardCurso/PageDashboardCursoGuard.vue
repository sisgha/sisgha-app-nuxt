<script lang="ts" setup>
const idCurso = inject<ComputedRef<number>>("id_curso");

if (!idCurso) {
  throw new Error("id_curso was not provied");
}
</script>

<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard.cursos">
    <template #allowed>
      <PageDashboardCursoGuardFallbackInvalidIdentifier v-if="idCurso === -1" />

      <AppAuthorizationGuard v-else verbo="read" recurso="curso" :entity-id="idCurso">
        <template #allowed>
          <slot></slot>
        </template>

        <template #forbidden>
          <PageDashboardCursoGuardFallbackResourceNotAllowed />
        </template>
      </AppAuthorizationGuard>
    </template>

    <template #forbidden>
      <PageDashboardCursoGuardFallbackViewNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>