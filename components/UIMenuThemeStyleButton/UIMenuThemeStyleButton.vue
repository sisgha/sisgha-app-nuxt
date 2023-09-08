<script lang="ts" setup>
const { appColorMode: appColorMode, invertTheme: alterarTema } = useAppColorMode();

const icon = computed(() => {
  return unref(appColorMode) === "dark" ? "mdi-weather-sunny" : "mdi-weather-night"
})

const alt = computed(() => {
  return unref(appColorMode) === "dark" ? "Modo claro" : "Modo escuro"
})

</script>

<template>
  <v-btn @click="alterarTema()" :icon="icon" :title="alt"></v-btn>
</template>
