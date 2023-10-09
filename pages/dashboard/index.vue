<script lang="ts" setup>
import { getPageDashboardBreadcrumbItems } from '../../components/PageDashboard/getPageDashboardBreadcrumbItems';

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
})

const breadcrumbItems = getPageDashboardBreadcrumbItems();

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <DashboardContainer class="my-8">
      <h1>Início</h1>
    </DashboardContainer>
  </LayoutDashboardPage>
</template>
