<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet" />
  </Head>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';

const colorMode = useColorMode()

const theme = useTheme()

watch(
  colorMode,
  () => {
    theme.global.name.value = colorMode.value === "dark" ? 'dark' : 'light';
  },
  {
    immediate: true
  }
)
</script>

<script lang="ts">
import "@/assets/styles/fontePadrao.css";
</script>

<style>
img {
  display: block;
  max-width: 100%;
}
</style>