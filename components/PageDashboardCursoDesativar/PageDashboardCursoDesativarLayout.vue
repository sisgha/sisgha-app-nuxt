<script lang="ts" setup>
import { getPageDashboardCursoDesativarBreadcrumbItems } from './hooks';


//

const breadcrumbItems = getPageDashboardCursoDesativarBreadcrumbItems();

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardCursoDesativarLayoutHeader />

      <div class="my-8"></div>

      <slot></slot>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>