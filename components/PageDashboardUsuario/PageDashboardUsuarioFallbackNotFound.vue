<script lang="ts" setup>
import { getPageDashboardUsuarioBreadcrumbItems } from './hooks/getPageDashboardUsuarioBreadcrumbItems';

const breadcrumbItems = getPageDashboardUsuarioBreadcrumbItems();
</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <VAlert type="error">
        O usuário não foi encontrado.
      </VAlert>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>