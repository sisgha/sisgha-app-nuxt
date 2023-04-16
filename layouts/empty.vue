<template>
  <div class="layout">
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;

  overflow: hidden;
}

.main {
  flex: 1;

  height: 100%;

  overflow: auto;
}
</style>