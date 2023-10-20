<script lang="ts" setup>
import { useAPIACtionModalidadeFindById } from '../../composables/hooks/useAPIActionModalidadeFindById';
import { APP_QUERY_SUSPENSE_BEHAVIOUR, useAPIActionSearch } from '../../infrastructure';
import { APIActionModalidadeList } from '../../infrastructure/api/api-actions';
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

//

const hasValue = computed(() => unref(value) !== null);

//

const apiSearchModalidade = await useAPIActionSearch(APIActionModalidadeList, "modalidades", APP_QUERY_SUSPENSE_BEHAVIOUR.DISABLED);

const {
  isLoading: apiSearchModalidadeIsLoading,
  searchState: apiSearchModalidadeSearchState
} = apiSearchModalidade;

const apiSearchModalidadeResults = computed(() => apiSearchModalidade.items.value);

const { resultCold: selectedModalidadeData, isError: ixE, isLoading: ixL } = await useAPIACtionModalidadeFindById(value, APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS)

//

const isLoadingDebounced = refDebounced(apiSearchModalidadeIsLoading, 145);

const isLoadingSmooth = computed(() => apiSearchModalidadeIsLoading.value && isLoadingDebounced.value);

//

const { isBusy } = appContextResourceHandlerCursoForm;

const isDisabled = computed(() => isBusy.value);

//

const allUsefulModalidades = computed(() => {
  const selectedModalidade = selectedModalidadeData.value;
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

const hasSelectedData = computed(() => unref(allUsefulModalidades).findIndex(i => i.id === unref(value)) !== -1);

//
</script>

<template>
  <div class="my-3">
    <VAutocomplete v-if="hasValue && !hasSelectedData" no-filter label="Modalidade" disabled
      value="Buscando modalidade..." variant="outlined" />

    <VAutocomplete v-else no-filter clearable label="Modalidade" v-model="value" v-bind="formFieldAttrs"
      v-model:search="apiSearchModalidadeSearchState.search" :loading="isLoadingSmooth" :disabled="isDisabled"
      :items="items" item-value="value" item-title="label" :error="hasErrors" variant="outlined" />

    <VAlert v-for="error in errors" :key="error" class="mb-7" type="error" variant="tonal" :text="error" />
  </div>
</template>