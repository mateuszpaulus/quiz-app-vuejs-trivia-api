<template>
  <div class="container">
    <div class="panel">
      <h4 class="title">Page Not Found</h4>
      <p class="text">The page you are looking for is not found</p>
      <RouterLink class="router-link" to="/">Go back to Start Quiz</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
}

.text {
  margin-bottom: 1rem;
}

.router-link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
