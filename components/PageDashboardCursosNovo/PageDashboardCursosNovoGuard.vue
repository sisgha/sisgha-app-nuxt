
<template>
  <AppAuthorizationGuard verbo="create" recurso="curso">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <PageDashboardCursosNovoGuardFallbackNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>