<script lang="ts" setup>
import { useAppContextResourceHandlerCurso } from '../ResourceHandlerCurso/hooks';

const { idCurso } = useAppContextResourceHandlerCurso()
</script>

<template>
  <AppAuthorizationGuard verbo="edit" recurso="curso" :entityId="idCurso">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <ResourceHandlerCursoEditGuardFallbackNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>