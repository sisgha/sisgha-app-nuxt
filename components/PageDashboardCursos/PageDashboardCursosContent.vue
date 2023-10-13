<script lang="ts" setup>
import {
  createAppContextPageDashboardCursosContent,
  getPageDashboardCursosBreadcrumbItems,
} from './hooks';


//

await createAppContextPageDashboardCursosContent();

//

const breadcrumbItems = getPageDashboardCursosBreadcrumbItems();

//

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <PageDashboardCursosContentHeader />

      <div class="my-8"></div>

      <div>
        WIP
      </div>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>
