<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
})

const breadcrumbItems = ref([
  {
    title: 'Painel',
    disabled: true,
    to: '/dashboard',
  },
])
</script>

<template>
  <layout-dashboard-page :breadcrumbItems="breadcrumbItems">
    <h1>Início</h1>
  </layout-dashboard-page>
</template>
