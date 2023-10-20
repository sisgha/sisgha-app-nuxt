<script lang="ts" setup>
import { IAPIActionCursoCreateDto } from "../../infrastructure";
import {
  APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM,
  createAppContextResourceHandlerCursoForm,
} from "../ResourceHandlerCursoForm/hooks";
import { createAppContextPageDashboardCursosNovoContent, getPageDashboardCursosNovoBreadcrumbItems } from "./hooks";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT } from "./hooks/context/tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT";

//

const appContextPageDashboardCursosNovoContent = await createAppContextPageDashboardCursosNovoContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT, appContextPageDashboardCursosNovoContent);

//

const { form } = appContextPageDashboardCursosNovoContent;

//

const appContextResourceHandlerCursoForm = await createAppContextResourceHandlerCursoForm<IAPIActionCursoCreateDto>(form);
provide(APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM, appContextResourceHandlerCursoForm);

//

const breadcrumbItems = getPageDashboardCursosNovoBreadcrumbItems();

//
</script>

<template>
  <div>
    <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
      <LayoutDashboardContainer class="my-8">
        <PageDashboardCursosNovoContentHeader />

        <VDivider class="my-8" />

        <div>
          <ResourceHandlerCursoForm>
            <ResourceHandlerCursoFormFieldsDefault />

            <VDivider class="my-3" />

            <PageDashboardCursosNovoContentFormFooter />

            <VDivider class="my-3" />
          </ResourceHandlerCursoForm>
        </div>
      </LayoutDashboardContainer>
    </LayoutDashboardPage>
  </div>
</template>
