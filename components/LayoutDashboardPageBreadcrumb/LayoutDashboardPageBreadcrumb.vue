<script lang="ts" setup>
import { useElementBounding } from '@vueuse/core';


const { breadcrumbItems } = defineProps<{
  breadcrumbItems?: any[]
}>()

const elRef = ref<HTMLElement | null>(null)

const { width } = useElementBounding(elRef)

const scrollWidth = computed(() => {
  void width.value;
  const el = elRef.value;
  return el?.scrollWidth;
})

watch(
  [elRef, width],
  () => {
    const el = elRef.value;


    if (el) {
      const scrollWidth = el.scrollWidth
      el.scrollTo({ left: scrollWidth })
    }
  },
  {
    immediate: true
  })

</script>

<template>
  <div v-if="breadcrumbItems && breadcrumbItems?.length > 0">
    <VDivider />

    <LayoutDashboardContainer>
      <div ref="elRef" class="breadcrumbs">
        <VBreadcrumbs class="my-1" :items="breadcrumbItems">
          <template v-slot:divider>
            <VIcon icon="mdi-chevron-right"></VIcon>
          </template>
        </VBreadcrumbs>
      </div>
    </LayoutDashboardContainer>

    <VDivider />
  </div>
</template>

<style scoped>
.breadcrumbs {
  overflow-x: auto;
}
</style>