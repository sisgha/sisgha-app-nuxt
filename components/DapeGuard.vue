<template>
  <div v-if="isLoading">
    <p>Carregando...</p>
  </div>

  <slot v-if="showContent"></slot>

  <div v-if="showNotAllowed">
    <h1>Você não tem permissão para acessar esta página</h1>
  </div>
</template>

<script lang="ts" setup>
const { isLoading, verifyUsuarioHasCargo } = await useAuthedUserInfo();

const usuarioHasCargoDape = verifyUsuarioHasCargo("dape");

const showContent = computed(() => !unref(isLoading) && unref(usuarioHasCargoDape));
const showNotAllowed = computed(() => !unref(isLoading) && !unref(usuarioHasCargoDape));

</script>