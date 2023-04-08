<template>
  <div></div>
</template>

<script lang="ts" setup>
const { signOut } = useAuth();

await signOut({ redirect: false });

navigateTo("/")
</script>