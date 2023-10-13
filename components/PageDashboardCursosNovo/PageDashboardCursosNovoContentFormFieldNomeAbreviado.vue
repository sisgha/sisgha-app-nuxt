<script lang="ts" setup>
import { useAppContextPageDashboardCursosNovoContent } from './hooks/context/useAppContextPageDashboardCursosNovoContent';

// 

const appContextPageDashboardCursosNovoContent = await useAppContextPageDashboardCursosNovoContent();

//

const { form } = appContextPageDashboardCursosNovoContent;

// 

const formField = form.register('nomeAbreviado')

const { value: formFieldValue, attrs: formFieldAttrs } = formField;

const value = computed({
  get() {
    return formFieldValue.value
  },
  set(value) {
    formFieldValue.value = value
  },
})

//

const errors = computed(() => form.errors.value.nomeAbreviado ?? null)
const hasErrors = computed(() => errors.value != null)

//

const { isBusy } = appContextPageDashboardCursosNovoContent;

</script>

<template>
  <div class="my-3">
    <VTextField :disabled="isBusy" v-model="value" v-bind="formFieldAttrs" :error="hasErrors" type="text"
      label="Nome Abreviado do Curso" variant="outlined" />

    <VAlert v-if="hasErrors && errors !== null" class="mb-7" type="error" variant="tonal" :text="errors" />
  </div>
</template>