<script lang="ts" setup>
import { getPageDashboardCursoEditarBreadcrumbItems } from './hooks';

//

const breadcrumbItems = getPageDashboardCursoEditarBreadcrumbItems();

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardCursoEditarLayoutHeader />

      <div class="my-8"></div>

      <slot></slot>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>