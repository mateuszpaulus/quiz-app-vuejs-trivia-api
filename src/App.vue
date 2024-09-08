<template>
  <RouterView v-slot="{ Component }">
    <transition :duration="300" name="slide-right">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
