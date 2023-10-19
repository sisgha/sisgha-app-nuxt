<script lang="ts" setup>
import { useParsedResourceId } from '~/composables';

const props = defineProps({
  resourceId: {
    required: true
  },
  message: {
    type: String,
    required: false
  }
})

const resourceId = useParsedResourceId(computed(() => props.resourceId));

const isValidIdentifier = computed(() => resourceId.value !== -1);

</script>

<template>
  <slot name="valid" v-if="isValidIdentifier"></slot>
  <slot name="invalid" v-else>
    <VAlert type="error">
      {{ props.message ?? "O identificador do registro é inválido." }}
    </VAlert>
  </slot>
</template>