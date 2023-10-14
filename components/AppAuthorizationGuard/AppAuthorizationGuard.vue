<script lang="ts" setup>
import { IAPIActionUsuarioCheckAuthorizationDto } from '../../infrastructure';


const appContextAuth = useAppContextAuth();

const props = defineProps({
  recurso: {
    type: String,
    required: true
  },
  verbo: {
    type: String,
    required: true
  },
  entityId: {
    type: Number,
    required: false
  }
});

const verbo = props.verbo;
const recurso = props.recurso;
const entityId = props.entityId ?? null;

const check: Omit<IAPIActionUsuarioCheckAuthorizationDto, "usuarioId"> = {
  verbo,
  recurso,
  entityId,
}

const { can: isAllowed, isLoading } = await appContextAuth.useCheckAuthorization(check);

</script>

<template>
  <div v-if="isLoading">
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