<template>
  <div class="view-header">
    <h1>Usuários</h1>

    <div class="view-header-spacer"></div>

    <AppAuthorizationGuard verbo="create" recurso="usuario">
      <template #allowed>
        <VBtn to="/dashboard/usuarios/novo" icon="mdi-plus" color="success"></VBtn>
      </template>
      <template #forbidden>
      </template>
    </AppAuthorizationGuard>

  </div>

  <div class="my-8"></div>

  <div>
    <PageDashboardUsuariosContentSearchInputQuery />
    <PageDashboardUsuariosContentSearchResultTable />
  </div>
</template>

<style scoped>
.view-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem
}

.view-header-spacer {
  flex: 1;
}
</style>