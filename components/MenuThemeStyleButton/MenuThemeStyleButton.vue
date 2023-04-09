<template>
  <v-btn @click="alterarTema()" :icon="icon" :title="alt"></v-btn>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const alterarTema = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}

const icon = computed(() => {
  return colorMode.value === "dark" ? "mdi-weather-sunny" : "mdi-weather-night"
})

const alt = computed(() => {
  return colorMode.value === "dark" ? "Modo claro" : "Modo escuro"
})

</script>