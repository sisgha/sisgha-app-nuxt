<script lang="ts" setup>
const { breadcrumbItems = [] } = defineProps<{
  breadcrumbItems?: any[]
}>()
</script>

<template>
  <div>
    <v-container class="py-8 px-8">
      <layout-dashboard-page-breadcrumb :breadcrumbItems="breadcrumbItems" />

      <slot></slot>
    </v-container>
  </div>
</template>