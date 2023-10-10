<script lang="ts" setup>
const { breadcrumbItems } = defineProps<{
  breadcrumbItems?: any[]
}>()
</script>

<template>
  <div v-if="breadcrumbItems && breadcrumbItems?.length > 0">
    <VDivider />

    <LayoutDashboardContainer>
      <VBreadcrumbs class="my-1" :items="breadcrumbItems">
        <template v-slot:divider>
          <VIcon icon="mdi-chevron-right"></VIcon>
        </template>

      </VBreadcrumbs>
    </LayoutDashboardContainer>

    <VDivider />
  </div>
</template>