<script lang="ts" setup>
import { useAppContextResourceHandlerCurso } from '../ResourceHandlerCurso/hooks';

//

const { apiActionCursoFindById } = useAppContextResourceHandlerCurso();

//

const { isLoading, result } = apiActionCursoFindById;

//

const isActive = computed(() => unref(result)?.dateDeleted === null);

const isAllowed = computed(() => isActive.value);
</script>

<template>
  <slot name="loading" v-if="isLoading">
    <UILoading />
  </slot>

  <slot name="allowed" v-else-if="isAllowed === true"></slot>

  <div v-else>
    <slot name="forbidden">
      <VAlert type="warning">
        <p>Este registro foi desativado.</p>
      </VAlert>
    </slot>
  </div>
</template>