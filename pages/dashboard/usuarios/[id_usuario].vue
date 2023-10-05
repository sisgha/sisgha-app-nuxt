<script lang="ts" setup>
import { HeadTitleContext } from '../../../infrastructure/utils/buildHeadTitle';

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
})

useAppHeadTitle("Usuário", HeadTitleContext.DASHBOARD);

const tab = ref(null)

const breadcrumbItems = ref([
  {
    title: 'Painel',
    disabled: false,
    to: '/dashboard',
  },

  {
    title: 'Usuários',
    disabled: false,
    to: '/dashboard/usuarios/',
  },

  {
    title: 'Usuário',
    disabled: true,
  },
])

</script>

<template>
  <layout-dashboard-page :breadcrumbItems="breadcrumbItems">
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">
      <h1>Usuário</h1>
    </div>

    <div class="my-8"></div>

    <div class="usuario-container">
      <v-tabs v-model="tab" fixed-tabs bg-color="teal-darken-3" slider-color="teal-lighten-3" align-tabs="center">
        <v-tab :value="1">Conta</v-tab>
        <v-tab :value="2">Professor</v-tab>
      </v-tabs>
    </div>
  </layout-dashboard-page>
</template>

<style>
@media (min-width: 500px) {
  .usuario-container {
    max-width: 70rem;
    margin: 0 auto;
  }
}
</style>
