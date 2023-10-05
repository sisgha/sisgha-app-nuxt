<script lang="ts" setup>
const { breadcrumbItems } = defineProps<{
  breadcrumbItems?: any[]
}>()
</script>

<template>
  <div v-if="breadcrumbItems && breadcrumbItems?.length > 0">
    <v-divider />

    <v-breadcrumbs class="my-1" :items="breadcrumbItems">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>

    </v-breadcrumbs>

    <v-divider />
  </div>
</template>