<script lang="ts" setup>
import { getPageDashboardUsuarioBreadcrumbItems } from './hooks/getPageDashboardUsuarioBreadcrumbItems';

//

const breadcrumbItems = getPageDashboardUsuarioBreadcrumbItems();
</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <VAlert type="error">
        O identificador do usuário é inválido.
      </VAlert>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>