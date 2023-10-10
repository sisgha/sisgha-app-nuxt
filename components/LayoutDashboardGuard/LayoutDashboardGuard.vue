<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <LayoutDashboardContainer class="my-8">
        <VAlert type="error">
          Você não tem permissão para acessar o painel.
        </VAlert>
      </LayoutDashboardContainer>
    </template>
  </AppAuthorizationGuard>
</template>
