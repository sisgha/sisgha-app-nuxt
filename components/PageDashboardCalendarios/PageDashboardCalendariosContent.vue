<script lang="ts" setup>
import { getPageDashboardCalendariosBreadcrumbItems } from "./hooks/getPageDashboardCalendariosBreadcrumbItems";

//

const breadcrumbItems = getPageDashboardCalendariosBreadcrumbItems();

//

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <h1>Calendários</h1>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
