
<template>
  <AppAuthorizationGuard verbo="create" recurso="usuario">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <DashboardContainer class="my-8">
        <VAlert type="error">
          Você não tem permissão para criar um usuário.
        </VAlert>
      </DashboardContainer>
    </template>
  </AppAuthorizationGuard>
</template>