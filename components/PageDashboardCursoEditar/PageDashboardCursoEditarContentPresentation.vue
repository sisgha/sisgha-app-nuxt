
<script lang="ts" setup>
import { IAPIActionCursoUpdateDto } from '../../infrastructure';
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM, createAppContextResourceHandlerCursoForm } from '../ResourceHandlerCursoForm/hooks';
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION, createAppContextPageDashboardCursoEditarContentPresentation } from './hooks';

//

const appContextPageDashboardCursoEditarPresentation = await createAppContextPageDashboardCursoEditarContentPresentation();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION, appContextPageDashboardCursoEditarPresentation);

//

const { form, apiActionCursoFindById } = appContextPageDashboardCursoEditarPresentation;

//


const appContextResourceHandlerCursoForm = await createAppContextResourceHandlerCursoForm<IAPIActionCursoUpdateDto>(form);
provide(APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM, appContextResourceHandlerCursoForm)

//

const { isLoading, result } = apiActionCursoFindById;

</script>

<template>
  <UILoading v-if="isLoading" />

  <div v-else-if="result">

    <ResourceHandlerCursoForm>
      <ResourceHandlerCursoFormFieldsDefault />

      <VDivider class="my-3" />

      <PageDashboardCursoEditarContentPresentationActions />

      <VDivider class="my-3" />
    </ResourceHandlerCursoForm>
  </div>
</template>