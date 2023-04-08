<template>
  <div>
    dape

    <pre><code>{{ JSON.stringify({ usuario }, null, 2) }}</code></pre>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "dape",
  middleware: 'auth'
})

const { usuario } = await useAuthedUserInfo();
</script>