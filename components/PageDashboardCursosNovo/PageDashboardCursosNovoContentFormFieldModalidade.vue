<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import { APIActionModalidadeFindById, APIActionModalidadeList } from '../../infrastructure/api/api-actions';
import { useAppContextPageDashboardCursosNovoContent } from './hooks';

// 

const appContextPageDashboardCursosNovoContent = await useAppContextPageDashboardCursosNovoContent();

//

const { form } = appContextPageDashboardCursosNovoContent;

// 

const { value: formModalidadeId } = form.register('modalidadeId');

const value = computed({
  get() {
    const modalidadeIdValue = formModalidadeId.value;
    return modalidadeIdValue > 0 ? modalidadeIdValue : null
  },
  set(value) {
    formModalidadeId.value = (value !== null && Number.isInteger(value) && value > 0) ? value : -1
  },
})

const hasValue = computed(() => value.value !== null)

//

const modalidadeIdErrors = computed(() => form.errors.value.modalidadeId ?? null)
const hasErrors = computed(() => modalidadeIdErrors.value != null)

//

const { isBusy } = appContextPageDashboardCursosNovoContent;


//

const appContextAPI = useAppContextAPI();
const apiSearchModalidade = await useAPISearch(APIActionModalidadeList, false);

const {
  isLoading: apiSearchModalidadeIsLoading,
  searchState: apiSearchModalidadeSearchState
} = apiSearchModalidade;

const apiSearchModalidadeResults = computed(() => apiSearchModalidade.items.value);

const selectedModalidadeQuery = useQuery(
  ["modalidades", computed(() => `modalidade::id::${value.value}`)],
  async () => {
    const modalidadeId = value.value;

    if (hasValue.value) {
      return appContextAPI.invoke(APIActionModalidadeFindById, { id: modalidadeId })
    }

    return null;
  }, {
  enabled: hasValue, keepPreviousData: true
});


const allUsefulModalidades = computed(() => {
  const selectedModalidade = selectedModalidadeQuery.data.value;
  const searchModalidades = apiSearchModalidadeResults.value;

  return [
    ...selectedModalidade ? [selectedModalidade] : [],
    ...searchModalidades.filter(result => result.id !== selectedModalidade?.id)
  ];
})

const items = computed(() => allUsefulModalidades.value.map(item => ({
  value: item.id,
  label: item.nome,
})));

</script>

<template>
  <div class="my-3">
    <VAutocomplete label="Modalidade" v-model="value" v-model:search="apiSearchModalidadeSearchState.search" no-filter
      clearable :loading="apiSearchModalidadeIsLoading" :disabled="isBusy" :items="items" item-value="value"
      item-title="label" :error="hasErrors" variant="outlined" />

    <VAlert v-if="hasErrors && modalidadeIdErrors !== null" class="mb-7" type="error" variant="tonal"
      :text="modalidadeIdErrors" />
  </div>
</template>