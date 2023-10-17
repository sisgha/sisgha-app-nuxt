<script lang="ts" setup>
import { HeadTitleContext } from '../../infrastructure';
import { getPageDashboardCursoBreadcrumbItems } from './hooks';

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

//

const breadcrumbItems = getPageDashboardCursoBreadcrumbItems();

</script>

<template>
  <PageDashboardCursoGuard>
    <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
      <LayoutDashboardContainer class="my-8">
        <PageDashboardCursoHeader />

        <div class="my-8"></div>

        <ResourceHandlerCurso :resourceId="idCurso">
          <ResourceHandlerCursoDisplay />

          <div class="acoes">
            <div class="acoes-espaco"></div>

            <VBtn prepend-icon="mdi-check" :to="{ name: 'dashboard-cursos' }">Concluído</VBtn>
          </div>

          <VDivider class="my-3" />
        </ResourceHandlerCurso>
      </LayoutDashboardContainer>
    </LayoutDashboardPage>
  </PageDashboardCursoGuard>
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