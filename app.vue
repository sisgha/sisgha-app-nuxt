<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet" />
  </Head>

  <div :class="`app ${appColorMode === 'dark' ? 'dark' : 'light'}`">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { isEqual } from 'ufo';
const { appColorMode } = useAppColorMode();

const runtimeConfig = useRuntimeConfig()

const ensureRuntimeURL = () => {
  if ("window" in globalThis && 'location' in window) {
    const location = window.location;
    const runtime = runtimeConfig.public.runtime;

    if (runtime && !isEqual(location.origin, runtime)) {
      window.location.href = runtime;
    }
  }
}

onBeforeMount(() => {
  ensureRuntimeURL();
})

</script>

<style>
@import "@/assets/styles/themes/theme.css";
@import "@/assets/styles/fontePadrao.css";

img {
  display: block;
  max-width: 100%;
}

svg {
  max-width: 100%;
  height: auto;
  display: block;
}

.svg-fill-text path {
  fill: var(--sisgha-theme-text)
}

html {
  overflow: auto;
}
</style>