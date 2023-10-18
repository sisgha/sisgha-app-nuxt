<script lang="ts" setup>
import { useAppContextTheme } from "~/composables/hooks";

const { isDark, invertTheme } = useAppContextTheme();

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
