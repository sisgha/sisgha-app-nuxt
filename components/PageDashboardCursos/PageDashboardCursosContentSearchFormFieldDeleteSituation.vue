<script lang="ts" setup>
import { IAPIActionSearchStateDateDeletedFilter } from '../../infrastructure';
import { useAppContextPageDashboardCursosContent } from './hooks';

const appContextPageDashboardCursosContent = await useAppContextPageDashboardCursosContent();

const { apiActionSearchCursos } = appContextPageDashboardCursosContent;

const { searchState } = apiActionSearchCursos;

const items = [
  {
    value: IAPIActionSearchStateDateDeletedFilter.ALL,
    label: "Todos",
  },
  {
    value: IAPIActionSearchStateDateDeletedFilter.ONLY_NOT_DELETED,
    label: "Ativo",
  },
  {
    value: IAPIActionSearchStateDateDeletedFilter.ONLY_DELETED,
    label: "Inativo",
  },
]

</script>

<template>
  <div>
    <VSelect label="Situação" :items="items" v-model="searchState.filterDateDeleted" item-value="value" item-title="label"
      variant="outlined" hide-details />
  </div>
</template>