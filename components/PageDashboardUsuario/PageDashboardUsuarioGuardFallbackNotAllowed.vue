<script lang="ts" setup>
import { getPageDashboardUsuarioBreadcrumbItems } from './hooks/getPageDashboardUsuarioBreadcrumbItems';

//

const breadcrumbItems = getPageDashboardUsuarioBreadcrumbItems();
</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <VAlert type="error">
        Você não tem permissão para visualizar este usuário.
      </VAlert>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>