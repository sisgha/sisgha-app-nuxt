<template>
  <v-app class="app">
    <v-layout class="layout">
      <v-app-bar :elevation="1" color="surface">
        <div class="px-4">
          <NuxtLink to="/">
            <LogoSisgha class="logo" />
          </NuxtLink>
        </div>

        <v-spacer></v-spacer>

        <template v-slot:append>
          <UIMenuThemeStyleButton />
          <UIMenuAccountButton />
        </template>
      </v-app-bar>

      <v-main class="main">
        <slot></slot>
      </v-main>
    </v-layout>
  </v-app>
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