<template>
  <AppAuthorizationGuard verbo="create" recurso="curso" :showLoadingFallback="false">
    <template #allowed>
      <VBtn to="/dashboard/cursos/novo" icon="mdi-plus" color="success" title="Novo Curso"></VBtn>
    </template>

    <template #forbidden>
    </template>
  </AppAuthorizationGuard>
</template>
