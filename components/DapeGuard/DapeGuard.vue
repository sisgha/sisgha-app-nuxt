<script lang="ts" setup>
const authedUserInfo = await useAuthedUsuarioInfo();

const usuarioHasCargoDape = await authedUserInfo.checkCargo("dape");

const isLoading = computed(() => unref(authedUserInfo.isBusy))
const showContent = computed(() => usuarioHasCargoDape === true);
const showNotAllowed = computed(() => !unref(isLoading) && !unref(showContent));

</script>

<template>
  <div v-if="isLoading">
    <UILoading />
  </div>

  <div v-if="!isLoading">
    <slot v-if="showContent"></slot>

    <div v-if="showNotAllowed">
      <h1>Você não tem permissão para acessar esta página</h1>
    </div>
  </div>
</template>
