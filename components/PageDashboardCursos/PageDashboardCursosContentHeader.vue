<template>
  <div class="content-header">
    <h1>Cursos</h1>

    <AppAuthorizationGuard verbo="create" recurso="curso">
      <template #allowed>
        <VBtn to="/dashboard/cursos/novo" icon="mdi-plus" color="success" title="Novo Curso"></VBtn>
      </template>
      <template #forbidden>
      </template>
    </AppAuthorizationGuard>
  </div>
</template>

<style scoped>
.content-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem
}

.content-header h1 {
  flex: 1;
}
</style>