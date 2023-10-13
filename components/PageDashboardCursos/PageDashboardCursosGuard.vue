<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard.cursos">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <LayoutDashboardContainer class="my-8">
        <VAlert type="error">
          Você não tem permissão para acessar a visualização "Cursos" do Painel.
        </VAlert>
      </LayoutDashboardContainer>
    </template>
  </AppAuthorizationGuard>
</template>