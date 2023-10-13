<script lang="ts" setup>
import { useForm } from '@vorms/core';
import { APIActionUsuarioCreate, IAPIActionUsuarioCreateDto, getCargoLabelBySlug, useAPIActionHookCargoGetAllActive } from '../../infrastructure';
import { zodResolver } from '../../infrastructure/utils/fixtures';
import { getPageDashboardUsuariosNovoBreadcrumbItems } from './hooks/getPageDashboardUsuariosBreadcrumbItems';

const appContextAPI = useAppContextAPI();

const form = useForm<IAPIActionUsuarioCreateDto>({
  validateMode: 'submit',
  reValidateMode: 'blur',

  initialValues: {
    nome: '',
    email: '',
    matriculaSiape: '',
    cargoIds: []
  },

  validate: zodResolver(appContextAPI.buildSchema(APIActionUsuarioCreate)),

  onSubmit(data, { setSubmitting }) {
    new Promise<void>(async (resolve) => {
      setSubmitting(true);

      await appContextAPI.invoke(APIActionUsuarioCreate, data)
      await appContextAPI.invalidateQueries("usuarios");

      await navigateTo("/dashboard/usuarios")

      setSubmitting(false);
      resolve()
    })
  }
})

const { errors, register, handleSubmit, handleReset } = form;

const { value: nome, attrs: nomeFieldAttrs } = register('nome')
const { value: email, attrs: emailFieldAttrs } = register('email')
const { value: matriculaSiape, attrs: matriculaSiapeFieldAttrs } = register('matriculaSiape')
const { value: cargoIds, attrs: cargoIdsFieldAttrs } = register('cargoIds')

const isBusy = computed(() => form.isSubmitting.value);
const canSubmit = computed(() => form.dirty.value && !form.isValidating.value && !isBusy.value);

const { isLoading: cargosQueryPending, items: cargos } = useAPIActionHookCargoGetAllActive();

const cargosSelectItems = computed(() => cargos.value.map(cargo => {
  return {
    value: cargo.id,
    label: getCargoLabelBySlug(cargo.slug)
  }
}))

const breadcrumbItems = getPageDashboardUsuariosNovoBreadcrumbItems();

</script>

<template>
  <div>
    <LayoutDashboardPage :breadcrumbItems="breadcrumbItems">
      <LayoutDashboardContainer class="my-8">
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">
          <h1>Cadastrar Usuário</h1>
        </div>

        <div class="my-8"></div>

        <div>
          <form @submit="handleSubmit" @reset="handleReset">
            <div class="my-3">
              <VTextField :disabled="isBusy" v-model="nome" v-bind="nomeFieldAttrs" :error="Boolean(errors.nome)"
                type="text" label="Nome" variant="outlined" />

              <VAlert v-if="errors.nome" class="mb-7" type="error" variant="tonal" :text="errors.nome" />
            </div>

            <div class="my-3">
              <VTextField :disabled="isBusy" v-model="email" v-bind="emailFieldAttrs" :error="Boolean(errors.email)"
                type="email" label="E-mail" variant="outlined" />

              <VAlert v-if="errors.email" class="mb-7" type="error" variant="tonal" :text="errors.email" />
            </div>

            <div class="my-3">
              <VTextField :disabled="isBusy" v-model="matriculaSiape" v-bind="matriculaSiapeFieldAttrs"
                :error="Boolean(errors.matriculaSiape)" type="text" label="Matrícula SIAPE" variant="outlined" />

              <VAlert v-if="errors.matriculaSiape" class="mb-7" type="error" variant="tonal"
                :text="errors.matriculaSiape" />
            </div>

            <div class="my-3">
              <VSelect :loading="cargosQueryPending" :disabled="isBusy" v-model="cargoIds" :items="cargosSelectItems"
                item-value="value" item-title="label" :error="Boolean(errors.cargoIds)" label="Funções" multiple
                variant="outlined" />

              <VAlert v-if="errors.cargoIds" class="mb-7" type="error" variant="tonal" :text="errors.cargoIds" />
            </div>

            <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 0.5rem">
              <VBtn :disabled="isBusy" prepend-icon="mdi-cancel" to="/dashboard/usuarios" type="button" variant="tonal">
                Cancelar</VBtn>

              <div style="flex: 1"></div>

              <VBtn :disabled="!canSubmit" prepend-icon="mdi-check" type="submit" variant="flat" color="success">Cadastrar
              </VBtn>
            </div>
          </form>
        </div>
      </LayoutDashboardContainer>
    </LayoutDashboardPage>
  </div>
</template>

