
<script lang="ts" setup>
import { useAppContextPageDashboardCursosNovoContent } from './hooks';

const { form } = await useAppContextPageDashboardCursosNovoContent();

const { handleSubmit, handleReset } = form;
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset">
    <slot></slot>
  </form>
</template>