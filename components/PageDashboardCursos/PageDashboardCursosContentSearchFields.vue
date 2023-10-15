<template>
  <div class="search-fields">
    <PageDashboardCursosContentSearchFormFieldQuery class="search-field-query" />
    <PageDashboardCursosContentSearchFormFieldDeleteSituation class="search-field-delete-situation" />
  </div>
</template>

<style scoped>
.search-fields {
  margin: 2rem 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1.5rem;
}

.search-field-query {
  flex: 9 1 10rem;
}

.search-field-delete-situation {
  flex: 1 0 8rem;
}
</style>