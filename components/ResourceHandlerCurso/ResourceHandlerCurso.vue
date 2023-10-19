<script lang="ts" setup>
import { useParsedResourceId } from '../../composables/hooks/useParsedResourceId';
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO, createAppContextResourceHandlerCurso } from './hooks';

//

const props = defineProps({
  resourceId: {
    type: Number,
    required: true,
  }
});

//

const resourceId = useParsedResourceId(computed(() => props.resourceId));
const isValidIdentifier = computed(() => resourceId.value !== -1);

//

const appContextResourceHandlerCurso = await createAppContextResourceHandlerCurso(resourceId);
provide(APP_CONTEXT_RESOURCE_HANDLER_CURSO, appContextResourceHandlerCurso);

//

const { apiActionCursoFindById } = appContextResourceHandlerCurso;

const { isErrorNotFound } = apiActionCursoFindById

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