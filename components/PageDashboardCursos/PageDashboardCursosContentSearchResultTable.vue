<script lang="ts" setup>
import { useAppContextPageDashboardCursosContent } from './hooks';

const appContextPageDashboardCursosContent = await useAppContextPageDashboardCursosContent();

const { apiActionSearchCursos } = appContextPageDashboardCursosContent;
const { searchState, items, total, isLoading } = apiActionSearchCursos;

const headers = [
  {
    key: 'nome',
    title: 'Nome',
    align: 'start',
    sortable: true,
  },
  {
    key: 'nomeAbreviado',
    title: 'Nome Abreviado',
    align: 'start',
    sortable: true,
  },
  {
    key: 'v-modalidade',
    title: 'Modalidade',
    align: 'start',
    sortable: false,
  },
  {
    key: 'v-situacao',
    title: 'Situação',
    align: 'start',
    sortable: false,
  },

  {
    key: 'v-acoes',
    title: 'Ações',
    align: 'start',
    sortable: false,
  },
] as const;

const isLoadingDebounced = refDebounced(isLoading, 130);

const isLoadingSmooth = computed(() => isLoading.value && isLoadingDebounced.value);
</script>

<template>
  <VCard>
    <VDataTableServer class="view-table" v-model:items-per-page="searchState.itemsPerPage" v-model:page="searchState.page"
      v-model:sort-by="searchState.sortBy" density="comfortable" :headers="headers" :items-length="total" :items="items"
      :loading="isLoadingSmooth" item-value="id">

      <template v-slot:item.v-modalidade="{ item }">
        <VChip>{{ item.raw.modalidade.nome }}</VChip>
      </template>

      <template v-slot:item.v-situacao="{ item }">
        <VChip v-if="item.raw.dateDeleted === null">Ativo</VChip>
        <VChip v-else>Inativo</VChip>
      </template>

      <template v-slot:item.v-acoes="{ item }">
        <VBtn icon="mdi-eye" variant="plain" class="my-1" :to="`/dashboard/cursos/${item.raw.id}`"
          title="Visualizar este curso."></VBtn>
      </template>

      <template v-slot:tfoot>
        <tr>
          <td colspan="4">
            <VDivider />
          </td>
        </tr>
      </template>
    </VDataTableServer>

    <VDivider color="info"></VDivider>
  </VCard>
</template>

<style scoped>
.view-table :global(th),
.view-table :global(td) {
  white-space: nowrap;
}
</style>