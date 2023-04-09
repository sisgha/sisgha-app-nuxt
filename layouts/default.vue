<template>
  <v-app>
    <v-layout class="layout">
      <v-app-bar :elevation="1" color="surface">
        <div class="px-4">
          <NuxtLink to="/">
            <LogoSisgha class="logo" />
          </NuxtLink>
        </div>

        <v-btn href="https://suap.ifro.edu.br/accounts/login/" target="_blank"> SUAP</v-btn>
        <v-btn href="https://virtual.ifro.edu.br/" target="_blank">AVA</v-btn>
        <v-btn href="https://portal.ifro.edu.br/" target="_blank">PORTAL</v-btn>

        <v-spacer></v-spacer>

        <template v-slot:append>
          <MenuThemeStyleButton />
          <MenuAccountButton />
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