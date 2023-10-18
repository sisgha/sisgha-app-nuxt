<script lang="ts" setup>

//


const appContextTheme = await createAppContextTheme();
provide(APP_CONTEXT_THEME, appContextTheme);


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

  <div class="app">
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