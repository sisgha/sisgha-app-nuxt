<script lang="ts" setup>
import { useAppContextPageDashboardUsuariosContent } from './hooks/useAppContextPageDashboardUsuariosContent';

const appContextPageDashboardUsuariosContent = await useAppContextPageDashboardUsuariosContent();

const { apiSearchUsuarios } = appContextPageDashboardUsuariosContent;

const { searchState } = apiSearchUsuarios;
</script>

<template>
  <div class="py-3">
    <VTextField v-model="searchState.search" label="Pesquisar" placeholder="Procurar por um usuário..."
      variant="outlined" />
  </div>
</template>