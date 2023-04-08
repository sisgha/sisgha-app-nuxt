<template>
  <div>
    <h1>DAPE</h1>


    <p>ID do Usuário: {{ usuario?.id }}</p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

const { usuario } = await useAuthedUserInfo();
</script>