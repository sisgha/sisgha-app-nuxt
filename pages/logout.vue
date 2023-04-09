<template>
  <div></div>
</template>

<script lang="ts" setup>
const { signOut } = useAuth();

onMounted(async () => {
  await signOut({ redirect: false });
  navigateTo("/")
})
</script>