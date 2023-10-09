<script lang="ts" setup>
const idUsuarioRef = inject<ComputedRef<number>>("id_usuario")!;
</script>

<template>
  <div v-if="idUsuarioRef === -1">
    <p>O identificador do usuário é inválido</p>
  </div>

  <AppAuthorizationGuard v-else verbo="read" recurso="usuario" :entity-id="idUsuarioRef">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <DashboardContainer class="my-8">
        <VAlert type="error">
          Você não tem permissão para visualizar este usuário.
        </VAlert>
      </DashboardContainer>
    </template>
  </AppAuthorizationGuard>
</template>