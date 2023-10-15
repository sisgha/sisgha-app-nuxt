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
        Você não tem permissão para visualizar este curso.
      </VAlert>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>