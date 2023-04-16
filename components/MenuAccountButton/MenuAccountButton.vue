<template>
  <div v-if="status === 'loading'"></div>

  <div v-if="status === 'authenticated'">
    <v-btn icon="mdi-account" to="/logout"></v-btn>
  </div>

  <div v-if="status === 'unauthenticated'">
    <v-btn icon="mdi-account" to="/login"></v-btn>
  </div>
</template>

<script lang="ts" setup>
const { status } = useAuthState();
</script>