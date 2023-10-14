<template>
  <div>
    <div class="search-fields">
      <VRow class="align-center">
        <VCol cols="9">
          <PageDashboardCursosContentSearchFormFieldQuery />
        </VCol>

        <VCol cols="3">
          <PageDashboardCursosContentSearchFormFieldDeleteSituation />
        </VCol>
      </VRow>

    </div>

    <PageDashboardCursosContentSearchResultTable />
  </div>
</template>

<style scoped>
.search-fields {
  margin: 2rem 0;
  display: flex;

  flex-direction: column;

  gap: 1.5rem;
}
</style>