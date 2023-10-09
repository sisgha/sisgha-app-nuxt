<template>
  <div class="dashboard-container">
    <slot></slot>
  </div>
</template>

<style scoped>
@media (min-width: 500px) {
  .dashboard-container {
    max-width: 40rem;
    margin: 0 auto;
  }
}
</style>