<template>
  <UILoading />
</template>

<script lang="ts" setup>
const authState = useAuthState();

const { status } = authState;

const authedUserInfo = await useAuthedUsuarioInfo()

const handleStatus = async () => {
  const status_value = unref(status)

  switch (status_value) {
    case "authenticated": {
      const hasCargoDape = await authedUserInfo.checkCargo("dape");

      if (hasCargoDape) {
        navigateTo("/dape");
      }

      break;
    }

    case "unauthenticated": {
      navigateTo("/login");
      break;
    }

    default: {
      break;
    }
  }
}

watch(
  [status],
  handleStatus,
  { immediate: true }
);

// 

</script>

