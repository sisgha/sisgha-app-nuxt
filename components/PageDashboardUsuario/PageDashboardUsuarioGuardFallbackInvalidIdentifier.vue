<script lang="ts" setup>
import { getPageDashboardUsuarioBreadcrumbItems } from './hooks';

//

const breadcrumbItems = getPageDashboardUsuarioBreadcrumbItems();

//
</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <VAlert type="error">
        O identificador fornecido de usuário é inválido.
      </VAlert>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>