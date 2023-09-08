<template>
  <div class="progress-container">
    <v-progress-circular indeterminate :size="50" :width="4" />
  </div>
</template>

<style scoped>
.progress-container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>