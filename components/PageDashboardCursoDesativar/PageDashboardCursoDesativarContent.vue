
<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query';
import { APIActionCursoDeactivate } from '../../infrastructure';
import { createAppContextPageDashboardCursoDesativar } from './hooks';

//

const appContextAPI = useAppContextAPI();

//

const ctx = await createAppContextPageDashboardCursoDesativar()
const { idCurso } = ctx;

//

const mutationDeactivateCurso = useMutation({
  mutationFn: async (id: number) => {
    await appContextAPI.invoke(APIActionCursoDeactivate, { id })

    await appContextAPI.invalidateQueries("cursos")
    appContextAPI.invalidateQueries(`curso::id::${id}`);
  }
});

//

const performDeactivation = async () => {
  await mutationDeactivateCurso.mutateAsync(idCurso.value)
  await navigateTo({ name: "dashboard-cursos" })
}

//

const isBusy = computed(() => !mutationDeactivateCurso.isIdle.value)
const canSubmit = computed(() => !isBusy.value)

</script>

<template>
  <div>
    <VCard class="mx-auto" variant="elevated">
      <VCardItem>
        <div>
          <div class="text-h6 mb-1">
            Você deseja realmente desativar este registro?
          </div>
        </div>
      </VCardItem>

      <VDivider />

      <VCardActions>
        <VBtn color="success" variant="flat" :to="{ name: 'dashboard-cursos-id_curso' }" :disabled="isBusy">
          Não
        </VBtn>

        <div class="flex-grow-1"></div>

        <VBtn color="error" variant="flat" :disabled="!canSubmit" @click="performDeactivation">
          Sim, Desativar
        </VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>