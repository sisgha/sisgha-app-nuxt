<script lang="ts" setup>
const isDark = useAppThemePalleteIsDark();
const invertTheme = useAppThemePalleteInvertTheme();

const icon = computed(() => {
  return isDark.value ? "mdi-weather-sunny" : "mdi-weather-night"
})

const alt = computed(() => {
  return isDark.value ? "Modo claro" : "Modo escuro"
})

</script>

<template>
  <VBtn @click="invertTheme()" :icon="icon" :title="alt"></VBtn>
</template>
