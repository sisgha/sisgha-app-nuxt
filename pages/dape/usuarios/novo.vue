<script lang="ts" setup>
import { useForm } from '@vorms/core';
import { api } from '../../../infrastructure';
import { HeadTitleContext } from '../../../infrastructure/utils/buildHeadTitle';
import { zodResolver } from '../../../infrastructure/utils/fixtures';
import { getCargoLabelBySlug } from '../../../infrastructure/utils/getCargoLabelBySlug';

definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

useAppHeadTitle("Novo Usuário", HeadTitleContext.DAPE);

const gql = useGql();

const context: api.IAPIServiceInvokeContext = { gql }

const schema = api.buildCreateUsuarioZodSchema(context)

const form = useForm<api.IAPICreateUsuarioDto>({
  validateMode: 'submit',
  reValidateMode: 'input',

  initialValues: {
    nome: '',
    email: '',
    matriculaSiape: '',
    cargoIds: []
  },

  validate: zodResolver(schema),

  onSubmit(data, { setSubmitting }) {
    new Promise<void>(async (resolve) => {
      setSubmitting(true);

      await api.createUsuario(context, data);

      await navigateTo("/dape/usuarios")

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

const cargosQuery = useAsyncData('cargos', async () => {
  const cargos = await api.getAllCargos(context);
  return cargos;
})

const { pending: cargosQueryPending } = cargosQuery;

const cargos = computed(() => cargosQuery.data.value ?? [])

const cargosSelectItems = computed(() => cargos.value.map(cargo => {
  return {
    value: cargo.id,
    label: getCargoLabelBySlug(cargo.slug)
  }
}))

</script>

<template>
  <div>
    <v-container class="py-8 px-8">
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">
        <h1>Cadastrar Usuário</h1>
      </div>

      <div class="my-8"></div>


      <div>
        <form @submit="handleSubmit" @reset="handleReset">
          <div class="my-3">
            <v-text-field :disabled="isBusy" v-model="nome" v-bind="nomeFieldAttrs" :error="Boolean(errors.nome)"
              type="text" label="Nome" variant="outlined" />

            <v-alert v-if="errors.nome" class="mb-7" type="error" variant="tonal" :text="errors.nome" />
          </div>

          <div class="my-3">
            <v-text-field :disabled="isBusy" v-model="email" v-bind="emailFieldAttrs" :error="Boolean(errors.email)"
              type="email" label="E-mail" variant="outlined" />

            <v-alert v-if="errors.email" class="mb-7" type="error" variant="tonal" :text="errors.email" />
          </div>

          <div class="my-3">
            <v-text-field :disabled="isBusy" v-model="matriculaSiape" v-bind="matriculaSiapeFieldAttrs"
              :error="Boolean(errors.matriculaSiape)" type="text" label="Matrícula SIAPE" variant="outlined" />

            <v-alert v-if="errors.matriculaSiape" class="mb-7" type="error" variant="tonal"
              :text="errors.matriculaSiape" />
          </div>

          <div class="my-3">
            <v-select :loading="cargosQueryPending" :disabled="isBusy" v-model="cargoIds" :items="cargosSelectItems"
              item-value="value" item-title="label" :error="Boolean(errors.cargoIds)" label="Funções" multiple
              variant="outlined" />

            <v-alert v-if="errors.cargoIds" class="mb-7" type="error" variant="tonal" :text="errors.cargoIds" />
          </div>

          <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 1rem">
            <v-btn :disabled="isBusy" prepend-icon="mdi-cancel" to="/dape/usuarios" type="button"
              variant="tonal">Cancelar</v-btn>

            <div style="flex: 1"></div>

            <v-btn :disabled="!canSubmit" prepend-icon="mdi-check" type="submit" variant="flat"
              color="success">Cadastrar</v-btn>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>

