<script lang="ts" setup>
import { getPageDashboardCursoBreadcrumbItems } from './hooks';

//

const breadcrumbItems = getPageDashboardCursoBreadcrumbItems();

//
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