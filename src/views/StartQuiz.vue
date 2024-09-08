<template>
  <div class="container">
    <StarButton @click="moveToCategories">Start Quiz</StarButton>
  </div>
</template>

<script setup>
import StarButton from '../components/StartButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const moveToCategories = () => {
  router.push('/categories')
}
</script>
