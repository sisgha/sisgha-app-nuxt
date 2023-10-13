<script lang="ts" setup>
import { createAppContextPageDashboardCursosNovoContent } from './hooks/context/createAppContextPageDashboardCursosNovoContent';
import { getPageDashboardCursosNovoBreadcrumbItems } from './hooks/getPageDashboardCursosNovoBreadcrumbItems';

//

await createAppContextPageDashboardCursosNovoContent();

//

const breadcrumbItems = getPageDashboardCursosNovoBreadcrumbItems();

//

</script>

<template>
  <div>
    <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
      <LayoutDashboardContainer class="my-8">
        <PageDashboardCursosNovoContentHeader />

        <div class="my-8"></div>

        <div>
          <PageDashboardCursosNovoContentForm>
            <PageDashboardCursosNovoContentFormFieldModalidade />
            <PageDashboardCursosNovoContentFormFieldNome />
            <PageDashboardCursosNovoContentFormFieldNomeAbreviado />

            <PageDashboardCursosNovoContentFormFooter />
          </PageDashboardCursosNovoContentForm>
        </div>
      </LayoutDashboardContainer>
    </LayoutDashboardPage>
  </div>
</template>

