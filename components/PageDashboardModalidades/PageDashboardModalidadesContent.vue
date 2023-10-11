<script lang="ts" setup>
import { createAppContextPageDashboardModalidadesContent } from './hooks/createAppContextPageDashboardModalidadesContent';
import { getPageDashboardModalidadesBreadcrumbItems } from './hooks/getPageDashboardModalidadesBreadcrumbItems';
import { APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT } from './hooks/useAppContextPageDashboardModalidadesContent';

// 

const breadcrumbItems = getPageDashboardModalidadesBreadcrumbItems();

// 

const appContextPageDashboardModalidadesContent = await createAppContextPageDashboardModalidadesContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT, appContextPageDashboardModalidadesContent);

// 

const { searchParams } = appContextPageDashboardModalidadesContent;

</script>

<template>
  <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <div class="view-header">
        <h1>Modalidades</h1>

        <div class="view-header-spacer"></div>

        <VBtn to="/dashboard/modalidades/#novo" icon="mdi-plus" color="success"></VBtn>
      </div>

      <div class="my-8"></div>

      <div>
        <div class="py-3">
          <VTextField v-model="searchParams.search" label="Pesquisar" placeholder="Procurar por uma modalidade..."
            variant="outlined" />
        </div>
      </div>


    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>

<style scoped>
.view-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem
}

.view-header-spacer {
  flex: 1;
}
</style>