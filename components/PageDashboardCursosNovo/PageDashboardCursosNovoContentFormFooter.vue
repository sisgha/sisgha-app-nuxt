
<script lang="ts" setup>
import { useAppContextResourceHandlerCursoForm } from '../ResourceHandlerCursoForm/hooks';

//

const { canSubmit, isBusy } = useAppContextResourceHandlerCursoForm();
</script>

<template>
  <div class="form-footer">
    <VBtn :disabled="isBusy" prepend-icon="mdi-cancel" to="/dashboard/cursos" type="button" variant="tonal">
      Cancelar
    </VBtn>

    <div class="flex-grow-1"></div>

    <VBtn :disabled="!canSubmit" prepend-icon="mdi-check" type="submit" variant="flat" color="success">
      Cadastrar
    </VBtn>
  </div>
</template>

<style scoped>
.form-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem
}
</style>