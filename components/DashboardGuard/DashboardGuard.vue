<script lang="ts" setup>
const authedUsuarioInfo = await useAuthedUsuarioInfo();

const checkIsAllowed = async () => {
  const canViewPageDashboard = await authedUsuarioInfo.checkAuthorization({
    verbo: "view",
    recurso: "pages.dashboard",
    entityId: null
  })

  return canViewPageDashboard;
}

const isAllowedQuery = useAsyncData(
  async () => {
    if (!authedUsuarioInfo.isBusy.value) {
      return checkIsAllowed()
    }

    return false;
  },
  {
    watch: [authedUsuarioInfo.isBusy],
    default: () => false,
  }
)

const isLoading = computed(() => unref(authedUsuarioInfo.isBusy) || unref(isAllowedQuery.pending));

const isAllowed = computed(() => isAllowedQuery.data.value)

</script>

<template>
  <div v-if="isLoading">
    <UILoading />
  </div>

  <div v-if="!isLoading">
    <slot v-if="isAllowed"></slot>

    <div v-if="!isAllowed">
      <h1>Você não tem permissão para acessar esta página</h1>
    </div>
  </div>
</template>
