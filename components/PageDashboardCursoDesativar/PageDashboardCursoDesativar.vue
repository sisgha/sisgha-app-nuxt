<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';
import { getPageDashboardCursoDesativarBreadcrumbItems } from './hooks';

useAppHeadTitle("Curso", HeadTitleContext.DASHBOARD);

const route = useRoute();

const idCurso = computed(() => {
  const idCursoParam = route.params.id_curso;

  if (typeof idCursoParam === "string") {
    const asNumber = parseInt(idCursoParam);

    if (!Number.isNaN(asNumber) && asNumber > 0) {
      return asNumber;
    }
  }

  return -1;
});

provide("id_curso", idCurso)

//

const breadcrumbItems = getPageDashboardCursoDesativarBreadcrumbItems();

//
</script>

<template>
  <PageDashboardCursoDesativarGuard>
    <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
      <LayoutDashboardContainer class="my-8">
        <PageDashboardCursoDesativarHeader />

        <div class="my-8"></div>

        <ResourceHandlerCurso :resourceId="idCurso">
          <ResourceHandlerCursoActivatedGuard>
            <template #allowed>
              <PageDashboardCursoDesativarContent />
            </template>
          </ResourceHandlerCursoActivatedGuard>
        </ResourceHandlerCurso>
      </LayoutDashboardContainer>
    </LayoutDashboardPage>
  </PageDashboardCursoDesativarGuard>
</template>

<style scoped>
.acoes {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.acoes .acoes-espaco {
  flex: 1;
}
</style>