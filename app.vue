<script lang="ts" setup>
import { useTheme } from "vuetify";
import { APP_CONTEXT_API } from "./composables/hooks/APP_CONTEXT_API";
import { APP_CONTEXT_AUTH } from "./composables/hooks/APP_CONTEXT_AUTH";
import { createAppContextAPI } from "./composables/hooks/createAppContextAPI";
import { createAppContextAuth } from "./composables/hooks/createAppContextAuth";

const appThemePallete = ref("dark");

//

const theme = useTheme();

const applyAppThemePalleteToVuetify = () => {
  theme.global.name.value = appThemePallete.value;
};

applyAppThemePalleteToVuetify();
watch(appThemePallete, applyAppThemePalleteToVuetify);
onMounted(applyAppThemePalleteToVuetify);

//

const colorMode = useColorMode();

const loadAppThemePalleteFromColorMode = () => {
  appThemePallete.value = colorMode.value;
};

watch(colorMode, loadAppThemePalleteFromColorMode);
onMounted(loadAppThemePalleteFromColorMode);

//

const appThemePalleteGetter = computed(() => appThemePallete.value)
provide("appThemePalleteGetter", appThemePalleteGetter);

//

const appContextAPI = createAppContextAPI();
provide(APP_CONTEXT_API, appContextAPI);

//

const appContextAuth = await createAppContextAuth(appContextAPI);
provide(APP_CONTEXT_AUTH, appContextAuth);

//
</script>

<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet" />
  </Head>

  <div :class="`app ${appThemePallete === 'dark' ? 'dark' : 'light'}`">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

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
  fill: rgb(var(--sisgha-theme-text))
}

html {
  overflow: auto;
}
</style>