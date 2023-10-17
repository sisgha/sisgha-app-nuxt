<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard.cursos">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <PageDashboardCursoGuardFallbackViewNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>