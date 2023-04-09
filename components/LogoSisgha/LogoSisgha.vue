<template>
  <div>
    <img src="@/assets/logos/sisgha-dark.svg" alt="SISGHA" v-if="!isDark" />
    <img src="@/assets/logos/sisgha-light.svg" alt="SISGHA" v-if="isDark" />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");
</script>
