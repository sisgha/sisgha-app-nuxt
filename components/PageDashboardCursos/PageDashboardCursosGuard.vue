<template>
  <AppAuthorizationGuard verbo="view" recurso="pages.dashboard.cursos">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <PageDashboardCursosGuardFallbackNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>