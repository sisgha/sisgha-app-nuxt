<script lang="ts" setup>
const { breadcrumbItems = [] } = defineProps<{
  breadcrumbItems?: any[]
}>()
</script>

<template>
  <div>
    <VContainer class="py-8 px-8">
      <LayoutDashboardPageBreadcrumb :breadcrumbItems="breadcrumbItems" />

      <slot></slot>
    </VContainer>
  </div>
</template>