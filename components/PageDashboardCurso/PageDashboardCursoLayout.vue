<script lang="ts" setup>
import { getPageDashboardCursoBreadcrumbItems } from './hooks';

//

const breadcrumbItems = getPageDashboardCursoBreadcrumbItems();

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardCursoLayoutHeader />

      <div class="my-8"></div>

      <slot></slot>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>