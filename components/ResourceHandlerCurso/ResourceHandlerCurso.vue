<script lang="ts" setup>
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO, createAppContextResourceHandlerCurso } from './hooks';

//

const props = defineProps({
  resourceId: {
    type: Number,
    required: true,
  }
});

//

const resourceId = computed(() => {
  const resourceId = props.resourceId;

  if (typeof resourceId === "string" || typeof resourceId === "number") {
    const asNumber = parseInt(String(resourceId));

    if (!Number.isNaN(asNumber) && asNumber > 0) {
      return asNumber;
    }
  }

  return -1;
});

const isValidIdentifier = computed(() => resourceId.value !== -1);

//

const appContextResourceHandlerCurso = await createAppContextResourceHandlerCurso(resourceId);
provide(APP_CONTEXT_RESOURCE_HANDLER_CURSO, appContextResourceHandlerCurso);

//

const { apiActionUsuarioFindById } = appContextResourceHandlerCurso;

const { isErrorNotFound } = apiActionUsuarioFindById

//

</script>


<template>
  <ResourceHandlerCursoGuardFallbackInvalidIdentifier v-if="!isValidIdentifier" />

  <AppAuthorizationGuard v-else verbo="read" recurso="curso" :entity-id="resourceId">
    <template #allowed>
      <ResourceHandlerCursoFallbackNotFound v-if="isErrorNotFound" />
      <slot v-else></slot>
    </template>

    <template #forbidden>
      <ResourceHandlerCursoGuardFallbackResourceNotAllowed />
    </template>
  </AppAuthorizationGuard>
</template>