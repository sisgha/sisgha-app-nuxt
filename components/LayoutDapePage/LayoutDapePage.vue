<script lang="ts" setup>
const { breadcrumbItems = [] } = defineProps<{
  breadcrumbItems?: any[]
}>()
</script>

<template>
  <div>
    <v-container class="py-8 px-8">
      <layout-dape-page-breadcrumb :breadcrumbItems="breadcrumbItems" />

      <div class="py-8">
        <slot></slot>
      </div>
    </v-container>
  </div>
</template>