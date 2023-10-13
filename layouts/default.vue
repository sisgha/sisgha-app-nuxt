<template>
  <VApp class="app">
    <VLayout class="layout">
      <VAppBar :elevation="1" color="surface">
        <div class="px-4">
          <NuxtLink to="/">
            <LogoSisgha class="logo" />
          </NuxtLink>
        </div>

        <VSpacer></VSpacer>

        <template v-slot:append>
          <UIMenuThemeStyleButton />
          <UIMenuAccountButton />
        </template>
      </VAppBar>

      <VMain class="main">
        <slot></slot>
      </VMain>
    </VLayout>
  </VApp>
</template>

<style scoped>
.logo {
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
}

.layout {
  display: flex;

  max-height: 100vh;
}

.main {
  height: 100%;
  overflow: auto;
}
</style>