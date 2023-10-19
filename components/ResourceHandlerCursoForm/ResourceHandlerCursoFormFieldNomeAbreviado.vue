<script lang="ts" setup>
import { useAppContextResourceHandlerCursoForm } from './hooks';

// 

const appContextResourceHandlerCursoForm = useAppContextResourceHandlerCursoForm();

//

const { useFormField } = appContextResourceHandlerCursoForm;

// 

const { formField, errors, hasErrors } = useFormField('nomeAbreviado');

const { value: value, attrs: formFieldAttrs } = formField;

//

const { isBusy } = appContextResourceHandlerCursoForm;

</script>

<template>
  <div class="my-3">
    <VTextField :disabled="isBusy" v-model="value" v-bind="formFieldAttrs" :error="hasErrors" type="text"
      label="Nome Abreviado do Curso" variant="outlined" />

    <VAlert v-for="error in errors" :key="error" class="mb-7" type="error" variant="tonal" :text="error" />
  </div>
</template>