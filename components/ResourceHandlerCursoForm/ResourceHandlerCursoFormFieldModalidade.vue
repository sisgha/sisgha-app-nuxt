<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import { APP_QUERY_SUSPENSE_BEHAVIOUR, useAPIActionSearch } from '../../infrastructure';
import { APIActionModalidadeFindById, APIActionModalidadeList } from '../../infrastructure/api/api-actions';
import { useAppContextResourceHandlerCursoForm } from './hooks';

// 

const appContextResourceHandlerCursoForm = useAppContextResourceHandlerCursoForm();

//

const { useFormField } = appContextResourceHandlerCursoForm;

// 

const { formField, errors, hasErrors } = useFormField('modalidadeId');

const { value: formFieldValue, attrs: formFieldAttrs } = formField

const value = computed({
  get() {
    const modalidadeId = formFieldValue.value;

    return modalidadeId > 0 ? modalidadeId : null
  },

  set(value) {
    formFieldValue.value = (value !== null && Number.isInteger(value) && value > 0) ? value : -1
  },
})

const hasValue = computed(() => value.value !== null)

//

const appContextAPI = useAppContextAPI();
const apiSearchModalidade = await useAPIActionSearch(APIActionModalidadeList, "modalidades", APP_QUERY_SUSPENSE_BEHAVIOUR.DISABLED);

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
  },
  {
    enabled: hasValue,
    keepPreviousData: true
  }
);

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

//

const { isBusy } = appContextResourceHandlerCursoForm;

const isLoadingDebounced = refDebounced(apiSearchModalidadeIsLoading, 145);
const isLoadingSmooth = computed(() => apiSearchModalidadeIsLoading.value && isLoadingDebounced.value);
</script>

<template>
  <div class="my-3">
    <VAutocomplete no-filter clearable label="Modalidade" v-model="value" v-bind="formFieldAttrs"
      v-model:search="apiSearchModalidadeSearchState.search" :loading="isLoadingSmooth" :disabled="isBusy" :items="items"
      item-value="value" item-title="label" :error="hasErrors" variant="outlined" />

    <VAlert v-for="error in errors" :key="error" class="mb-7" type="error" variant="tonal" :text="error" />
  </div>
</template>