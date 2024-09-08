<template>
  <div class="container">
    <div v-if="!loading && !error">
      <ul class="category">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/categories/${category.id}`"
          class="item"
        >
          <li>
            {{ category.name }}
          </li>
        </RouterLink>
      </ul>
    </div>
    <p v-if="loading">Fetching trivia categories...</p>
    <p v-if="error">Oops, something went wrong!</p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { fetchCategories } from '@/composables/useAPI'

const loading = ref(false)
const error = ref(false)

const categories = ref([])

onMounted(async () => {
  loading.value = true
  try {
    const data = await fetchCategories()
    categories.value = data.trivia_categories
    loading.value = false
  } catch (e) {
    loading.value = false
    error.value = true
  }
})
</script>

<style scoped>
.category {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  width: 100%;
}
</style>
