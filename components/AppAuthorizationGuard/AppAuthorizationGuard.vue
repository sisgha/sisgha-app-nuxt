<script lang="ts" setup>
import { CheckUsuarioAuthorizationsInputCheck } from '../../.nuxt/gql/default';

const props = defineProps({
  recurso: String,
  verbo: String,
  entityId: Number
});

const appContextAuth = await useAppContextAuth();

const verbo = props.verbo ?? null;
const recurso = props.recurso ?? null;
const entityId = props.entityId ?? null;

if (!verbo || !recurso) {
  throw new Error("verbo e recurso devem ser passados");
}

const check: Omit<CheckUsuarioAuthorizationsInputCheck, "usuarioId"> = {
  verbo,
  recurso,
  entityId,
}

const { can: isAllowed, isBusy } = await appContextAuth.useAuthorizationCheck(check);

</script>

<template>
  <div v-if="isBusy">
    <UILoading />
  </div>

  <slot name="allowed" v-else-if="isAllowed === true"></slot>

  <div v-else>
    <slot name="forbidden">
      <VAlert type="error">
        <p>Você não tem as permissões necessárias para realizar esta ação.</p>
      </VAlert>
    </slot>
  </div>
</template>