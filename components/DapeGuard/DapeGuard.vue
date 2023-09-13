<script lang="ts" setup>
const authedUserInfo = await useAuthedUsuarioInfo();

const fetchIsAllowed = async () => {
  const hasCargoDape = await authedUserInfo.checkCargo("dape");
  const hasCargoSistema = await authedUserInfo.checkCargo("sistema");
  return hasCargoDape || hasCargoSistema;
}

const isAllowedQuery = useAsyncData(
  async () => {
    if (!authedUserInfo.isBusy.value) {
      return fetchIsAllowed()
    }

    return false;
  },
  {
    watch: [authedUserInfo.isBusy],
    default: () => false,
  }
)

const isLoading = computed(() => unref(authedUserInfo.isBusy) || unref(isAllowedQuery.pending));

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
