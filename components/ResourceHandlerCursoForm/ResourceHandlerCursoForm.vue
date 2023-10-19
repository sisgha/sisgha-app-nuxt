<script lang="ts" setup>
import { useAppContextResourceHandlerCursoForm } from './hooks';

const { form } = useAppContextResourceHandlerCursoForm();

const { handleSubmit, handleReset } = form;
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset">
    <slot></slot>
  </form>
</template>