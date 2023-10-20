<script lang="ts" setup>
import { useAppContextResourceHandlerCursoForm } from '../ResourceHandlerCursoForm/hooks';

const appContextResourceHandlerCursoForm = useAppContextResourceHandlerCursoForm();

const { isBusy, canSubmit } = appContextResourceHandlerCursoForm;

</script>

<template>
  <div class="acoes">
    <VBtn :disabled="isBusy" prepend-icon="mdi-cancel" :to="{ name: 'dashboard-cursos-id_curso' }" type="button"
      variant="outlined">
      Cancelar
    </VBtn>

    <div class="flex-grow-1"></div>

    <VBtn :disabled="!canSubmit" prepend-icon="mdi-content-save" type="submit" variant="flat" color="success">
      Salvar
    </VBtn>
  </div>
</template>

<style scoped>
.acoes {
  gap: 1rem;
  display: flex;

  align-items: stretch;

  flex-wrap: wrap;
}

@media screen and (max-width: 560px) {
  .acoes {
    flex-direction: column;
  }
}
</style>