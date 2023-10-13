<script lang="ts" setup>
import { listModalidade } from '../../infrastructure/api/api-service/resources/modalidade';
import { useAppContextPageDashboardCursosNovoContent } from './hooks/context/useAppContextPageDashboardCursosNovoContent';

// 

const appContextPageDashboardCursosNovoContent = await useAppContextPageDashboardCursosNovoContent();


//

const apiSearchModalidade = await useAPISearch(listModalidade, false);

const {
  isLoading: apiSearchModalidadeIsLoading,
  searchState: apiSearchModalidadeSearchState
} = apiSearchModalidade;

const apiSearchModalidadeResults = computed(() => apiSearchModalidade.items.value);

//

const items = computed(() => apiSearchModalidadeResults.value.map(item => ({
  value: item.id,
  label: item.nome,
})));

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

//

const modalidadeIdErrors = computed(() => form.errors.value.modalidadeId ?? null)
const hasErrors = computed(() => modalidadeIdErrors.value != null)

//

const { isBusy } = appContextPageDashboardCursosNovoContent;

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