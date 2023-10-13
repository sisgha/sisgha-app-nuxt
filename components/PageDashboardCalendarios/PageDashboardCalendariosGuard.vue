<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard.calendarios">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <LayoutDashboardContainer class="my-8">
        <VAlert type="error">
          Você não tem permissão para acessar a visualização "Calendários" do Painel.
        </VAlert>
      </LayoutDashboardContainer>
    </template>
  </AppAuthorizationGuard>
</template>