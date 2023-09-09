<script lang="ts" setup>
import debounce from "lodash-es/debounce";
import { HeadTitleContext } from '../../../infrastructure/utils/buildHeadTitle';
import { getCargoLabelBySlug } from '../../../infrastructure/utils/getCargoLabelBySlug';

definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

useAppHeadTitle("Usuários", HeadTitleContext.DAPE);


const headers = reactive([
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
]);


const apiListUsuario = useAPIListUsuario();

const page = ref(1);
const search = ref("");
const sortBy = ref([]);
const itemsPerPage = ref(25);

const loadItems = async () => {
  const page_value = unref(page);
  const search_value = unref(search);
  const sort_by_value = unref(sortBy);
  const items_per_page_value = unref(itemsPerPage);

  await apiListUsuario.performSearch({
    query: search_value,
    sortBy: sort_by_value,
    limit: items_per_page_value,
    slide: { mode: "pageIndex1", value: page_value },
  })
}

await loadItems()

const isLoadingDebounced = ref(false);

const debouncedLoadItems = debounce(loadItems, 100);

const handleParamsUpdate = async () => {
  if (!isLoadingDebounced.value) {
    isLoadingDebounced.value = true;
    await debouncedLoadItems()
  }
}

const { items, total } = apiListUsuario;

watch([apiListUsuario.isLoading], () => {
  if (apiListUsuario.isLoading.value === false) {
    isLoadingDebounced.value = false;
  }
})

watch([page, search, sortBy, itemsPerPage], handleParamsUpdate, { immediate: false, })

watch([apiListUsuario.listUsuarioQuery.data], ([data]) => {
  if (data) {
    itemsPerPage.value = data.limit;
  }
})

const isLoading = computed(() => apiListUsuario.isLoading.value || isLoadingDebounced.value);

const breadcrumbItems = ref([
  {
    title: 'Painel DAPE',
    disabled: false,
    to: '/dape',
  },

  {
    title: 'Usuários',
    disabled: true,
    to: '/dape',
  },
])

</script>

<template>
  <layout-dape-page :breadcrumbItems="breadcrumbItems">
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 1rem">
      <h1>Usuários</h1>

      <div style="flex:1;"></div>

      <v-btn to="/dape/usuarios/novo" icon="mdi-plus" color="success"></v-btn>
    </div>

    <div class="my-8"></div>

    <div>

      <div class="py-3">
        <v-text-field v-model="search" label="Pesquisar" placeholder="Procurar por um usuário..." variant="outlined" />
      </div>

      <v-card>


        <v-data-table-server v-model:items-per-page="itemsPerPage" v-model:page="page" v-model:sort-by="sortBy"
          density="comfortable" :headers="headers" :items-length="total" :items="items" :loading="isLoading"
          :search="search" item-value="id">


          <template v-slot:item.matriculaSiape="{ item }">
            <v-chip variant="outlined">
              {{ item.raw.matriculaSiape }}
            </v-chip>
          </template>

          <template v-slot:item.v-cargos="{ item }">

            <v-chip v-for="cargo in item.raw.cargos" :key="cargo.id" class="ma-1" variant="elevated">
              {{ getCargoLabelBySlug(cargo.slug) }}
            </v-chip>

            <v-chip v-if="item.raw.cargos.length === 0" class="ma-1">
              Sem atribuições
            </v-chip>

          </template>

          <template v-slot:item.v-acoes="{ item }">
          </template>

          <template v-slot:tfoot>
            <tr>
              <td colspan="4">
                <v-divider />
              </td>
            </tr>
          </template>
        </v-data-table-server>

        <v-divider color="info"></v-divider>
      </v-card>
    </div>
  </layout-dape-page>
</template>
