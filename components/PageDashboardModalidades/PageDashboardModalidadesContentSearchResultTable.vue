<script lang="ts" setup>
import { getModalidadeNameBySlug } from "../../infrastructure/app-resources/modalidade/getModalidadeNameBySlug";
import { useAppContextPageDashboardModalidadesContent } from './hooks/useAppContextPageDashboardModalidadesContent';

const appContextPageDashboardModalidadesContent = await useAppContextPageDashboardModalidadesContent();

const { apiSearchModalidades } = appContextPageDashboardModalidadesContent;
const { searchState, items, total, isLoading } = apiSearchModalidades;

const headers = reactive([
  {
    key: 'v-nome',
    title: 'Nome',
    align: 'start',
    sortable: false,
  },
]);


const isLoadingDebounced = refDebounced(isLoading, 130);

const isLoadingSmooth = computed(() => isLoading.value && isLoadingDebounced.value);
</script>

<template>
  <VCard>
    <VDataTableServer class="view-table" v-model:items-per-page="searchState.itemsPerPage" v-model:page="searchState.page"
      v-model:sort-by="searchState.sortBy" density="comfortable" :headers="headers" :items-length="total" :items="items"
      :loading="isLoadingSmooth" item-value="id">

      <template v-slot:item.v-nome="{ item }">
        {{ getModalidadeNameBySlug(item.raw.slug) }}
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