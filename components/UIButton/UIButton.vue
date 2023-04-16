<template>
  <button class="ui-button">
    <div class="start-icon" v-show="$slots['start-icon']">
      <slot name="start-icon"></slot>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>


<style scoped>
.ui-button {
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;

  padding: 0.875rem 1.25rem;
  border-radius: 0.5625rem;

  background-color: rgb(var(--sisgha-theme-primary));
  color: rgb(var(--sisgha-theme-primary-text));


  font-size: 1rem;
  font-weight: 600;
}

.ui-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.content {
  flex: 1;
  text-align: center;
}
</style>