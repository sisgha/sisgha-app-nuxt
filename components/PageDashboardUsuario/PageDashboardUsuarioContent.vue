<script lang="ts" setup>
import { getCargoLabelBySlug } from '../../infrastructure';
import { createAppContextPageDashboardUsuarioContent } from './hooks/createAppContextPageDashboardUsuarioContent';
import { getPageDashboardUsuarioBreadcrumbItems } from './hooks/getPageDashboardUsuarioBreadcrumbItems';
import { APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT } from './hooks/useAppContextPageDashboardUsuarioContent';

//

const appContextPageDashboardUsuarioContent = await createAppContextPageDashboardUsuarioContent();
provide(APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT, appContextPageDashboardUsuarioContent);

//

const { apiActionUsuarioFindById } = appContextPageDashboardUsuarioContent;

const { result, isLoading, isErrorNotFound } = apiActionUsuarioFindById;

const breadcrumbItems = getPageDashboardUsuarioBreadcrumbItems();

//
</script>

<template>
  <LayoutDashboardPage v-if="isLoading" :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <UILoading />
    </LayoutDashboardContainer>
  </LayoutDashboardPage>

  <PageDashboardUsuarioFallbackNotFound v-else-if="isErrorNotFound" />

  <LayoutDashboardPage v-else-if="result" :breadcrumbItems="breadcrumbItems">
    <LayoutDashboardContainer class="my-8">
      <!-- <VBtnToggle v-model="visualizacao" class="visualizacoes" variant="outlined" divided>
        <VBtn class="visualizacao-item" value="informacoes">
          Informações
        </VBtn>

        <VBtn class="visualizacao-item" value="disponibilidade">
          Disponibilidade
        </VBtn>

        <VBtn class="visualizacao-item" value="ensino">
          Ensino
        </VBtn>
      </VBtnToggle> -->

      <h2 class="text-center my-8">{{ result.nome }}</h2>

      <section class="informacoes">

        <div class="informacoes-header">
          <h1 class="informacoes-header-title">Informações</h1>
          <hr class="informacoes-header-line">
        </div>

        <dl class="informacoes-list">
          <div class="informacoes-list-item">
            <dt>Email:</dt>
            <dd>{{ result.email }}</dd>
          </div>

          <div class="informacoes-list-item">
            <dt>Matrícula Siape:</dt>

            <dd class="ml-2">
              <VChip variant="outlined">
                {{ result.matriculaSiape }}
              </VChip>
            </dd>
          </div>

          <div class="informacoes-list-item">
            <dt>Situação da Conta:</dt>

            <dd>
              <span>{{ result.dateDeleted ? "Inativo" : "Ativo" }}</span>
            </dd>
          </div>

          <div class="informacoes-list-item">
            <dt>{{ result.cargos.length === 1 ? "Função" : "Funções" }}:</dt>

            <dd class="ml-1">
              <VChip v-for="cargo in result.cargos" :key="cargo.id" class="ma-1" variant="elevated">
                {{ getCargoLabelBySlug(cargo.slug) }}
              </VChip>

              <VChip v-if="result.cargos.length === 0" class="ma-1">
                Sem atribuições
              </VChip>
            </dd>
          </div>
        </dl>
      </section>
    </LayoutDashboardContainer>
  </LayoutDashboardPage>
</template>

<style scoped>
.visualizacoes {
  width: 100%;
  border-width: 2px;
}

.visualizacoes,
.visualizacoes> :first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.visualizacoes,
.visualizacoes> :last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.visualizacoes .visualizacao-item {
  flex: 1;
}

.informacoes {
  margin: 1rem 0;
}

.informacoes-header {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;

  gap: 1rem;

  margin: 1.5rem 0;
}

.informacoes-header .informacoes-header-title {
  font-weight: normal;
  font-size: 1.25rem;
}

.informacoes-header .informacoes-header-line {
  display: block;
  flex: 1;
}

.informacoes-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.25rem;
}

.informacoes-list-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.25rem;
}

.informacoes-list-item dt {
  font-weight: bold;
}
</style>
