<script lang="ts" setup>
import { getPageDashboardBreadcrumbItems } from './hooks/getPageDashboardBreadcrumbItems';

const breadcrumbItems = getPageDashboardBreadcrumbItems();
</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <h1>Início</h1>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
