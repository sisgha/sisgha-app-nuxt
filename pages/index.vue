<template>
  <div>
    <v-sheet class="px-4 py-4">
      <h1>Início</h1>

      <p v-if="status === 'authenticated'">
        Autenticado. ID do Usuário: {{ data!.user.id }}
      </p>

      <p v-if="status === 'unauthenticated'">
        Não autenticado.
      </p>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
const { status, data } = useAuthState();

if (unref(status) === "authenticated") {
  const { usuario, verifyUsuarioHasCargo } = await useAuthedUserInfo();

  watch([usuario], () => {
    if (unref(usuario)) {
      const hasCargoDape = verifyUsuarioHasCargo("dape");

      if (hasCargoDape) {
        return navigateTo("/dape");
      }
    }
  }, { immediate: true })


}

</script>