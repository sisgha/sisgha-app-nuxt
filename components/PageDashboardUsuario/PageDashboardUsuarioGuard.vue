<script lang="ts" setup>
const idUsuarioRef = inject<ComputedRef<number>>("id_usuario");
</script>

<template>
  <PageDashboardUsuarioGuardFallbackInvalidIdentifier v-if="idUsuarioRef === -1 || idUsuarioRef === undefined" />

  <AppAuthorizationGuard v-else verbo="read" recurso="usuario" :entity-id="idUsuarioRef">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <PageDashboardUsuarioGuardFallbackNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>