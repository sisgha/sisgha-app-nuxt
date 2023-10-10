<script lang="ts" setup>
const { status } = useAuthState();
</script>

<template>
  <div v-if="status === 'loading'"></div>

  <div v-if="status === 'authenticated'">
    <VBtn icon="mdi-account" to="/logout" />
  </div>

  <div v-if="status === 'unauthenticated'">
    <VBtn icon="mdi-account" to="/login" />
  </div>
</template>
