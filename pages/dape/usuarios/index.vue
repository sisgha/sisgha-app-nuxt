<template>
  <div>
    <v-container class="py-5=6">
      <h1>Usuários</h1>
    </v-container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dape",
  middleware: 'auth'
})
</script>