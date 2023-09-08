<script lang="ts" setup>
const { signOut, status } = useAuth();

const handleAuthStatus = async () => {
  const status_value = unref(status);

  if (status_value === "authenticated") {
    await signOut({ redirect: false });
  }

  if (status_value === "unauthenticated" || status_value === "authenticated") {
    await navigateTo("/")
  }
}

watch(
  [status],
  handleAuthStatus,
  { immediate: true }
)
</script>

<template>
  <UILoading />
</template>
