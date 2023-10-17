<script lang="ts" setup>
import { useAppContextPageDashboardCursosContent } from './hooks';

const appContextPageDashboardCursosContent = await useAppContextPageDashboardCursosContent();

const { apiActionSearchCursos } = appContextPageDashboardCursosContent;

const { searchState } = apiActionSearchCursos;
</script>

<template>
  <div>
    <VTextField v-model="searchState.search" label="Pesquisar" placeholder="Procurar por um curso..." variant="outlined"
      persistent-clear clearable hide-details @click:clear="searchState.search = ''" />
  </div>
</template>