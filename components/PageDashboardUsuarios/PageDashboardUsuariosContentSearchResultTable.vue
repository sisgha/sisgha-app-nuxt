<script lang="ts" setup>
import { getCargoLabelBySlug } from '../../infrastructure';
import { useAppContextPageDashboardUsuariosContent } from './hooks/useAppContextPageDashboardUsuariosContent';

const appContextPageDashboardUsuariosContent = await useAppContextPageDashboardUsuariosContent();

const { apiSearchUsuarios } = appContextPageDashboardUsuariosContent;
const { searchState, items, total, isLoading } = apiSearchUsuarios;

const headers = [
  {
    key: 'nome',
    title: 'Nome',
    align: 'start',
    sortable: true,
  },

  {
    key: 'matriculaSiape',
    title: 'Matrícula Siape',
    align: 'start',
    sortable: true,
  },

  {
    key: 'v-cargos',
    title: 'Cargos',
    align: 'start',
    sortable: false,
  },

  {
    key: 'v-acoes',
    title: 'Ações',
    align: 'start',
    sortable: false,
  },
] as const


const isLoadingDebounced = refDebounced(isLoading, 130);

const isLoadingSmooth = computed(() => isLoading.value && isLoadingDebounced.value);
</script>

<template>
  <VCard>
    <VDataTableServer class="view-table" v-model:items-per-page="searchState.itemsPerPage" v-model:page="searchState.page"
      v-model:sort-by="searchState.sortBy" density="comfortable" :headers="headers" :items-length="total" :items="items"
      :loading="isLoadingSmooth" item-value="id">

      <template v-slot:item.matriculaSiape="{ item }">
        <VChip variant="outlined">
          {{ item.raw.matriculaSiape }}
        </VChip>
      </template>

      <template v-slot:item.v-cargos="{ item }">

        <VChip v-for="cargo in item.raw.cargos" :key="cargo.id" class="ma-1" variant="elevated">
          {{ getCargoLabelBySlug(cargo.slug) }}
        </VChip>

        <VChip v-if="item.raw.cargos.length === 0" class="ma-1">
          Sem atribuições
        </VChip>

      </template>

      <template v-slot:item.v-acoes="{ item }">
        <VBtn icon="mdi-eye" variant="plain" class="my-1" :to="`/dashboard/usuarios/${item.raw.id}`"></VBtn>
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