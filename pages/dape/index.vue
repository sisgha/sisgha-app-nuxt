<script lang="ts" setup>
definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

const breadcrumbItems = ref([
  {
    title: 'Painel DAPE',
    disabled: true,
    to: '/dape',
  },
])
</script>

<template>
  <layout-dape-page :breadcrumbItems="breadcrumbItems">
    <h1>Início</h1>
  </layout-dape-page>
</template>
