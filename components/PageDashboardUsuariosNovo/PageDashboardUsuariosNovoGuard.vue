
<template>
  <AppAuthorizationGuard verbo="create" recurso="usuario">
    <template #allowed>
      <slot></slot>
    </template>

    <template #forbidden>
      <PageDashboardUsuariosNovoGuardFallbackNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>