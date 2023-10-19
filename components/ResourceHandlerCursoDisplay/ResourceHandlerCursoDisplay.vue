<script lang="ts" setup>
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY, createAppContextResourceHandlerCursoDisplay } from './hooks';

//

const appContextResourceHandlerCursoDisplay = await createAppContextResourceHandlerCursoDisplay();
provide(APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY, appContextResourceHandlerCursoDisplay);

//


const { apiActionCursoFindById } = appContextResourceHandlerCursoDisplay;

const { isLoading, result } = apiActionCursoFindById;

</script>

<template>
  <slot v-if="isLoading" name="loading">
    <UILoading />
  </slot>

  <div v-else-if="result">
    <div>
      <VDivider class="my-3" />

      <h2 class="my-5">{{ result.nome }}</h2>

      <VDivider class="my-3" />

      <VList class="my-3 py-0" rounded>
        <VListItem class="py-4" title="ID" :subtitle="result.id" />
      </VList>

      <VDivider class="my-3" />

      <VList class="my-3 py-0" rounded>
        <VListItem class="py-4" title="Nome" :subtitle="result.nome" />
      </VList>

      <VDivider class="my-3" />

      <VList class="py-0" rounded>
        <VListItem class="py-4" title="Nome Abreviado" :subtitle="result.nomeAbreviado" />
      </VList>

      <VDivider class="my-3" />

      <VList class="py-0" rounded>

        <VListItem class="py-4" title="Modalidade" :subtitle="result.modalidade.nome" />
      </VList>

      <VDivider class="my-3" />
    </div>
  </div>
</template>
