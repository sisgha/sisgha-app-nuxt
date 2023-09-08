<template>
  <div>
    <v-container class="py-5">
      <h1>Início</h1>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dape",
  middleware: 'auth'
})
</script>