<template>
  <nav class="menu">
    <button-fab
      v-for="button in buttons"
      :key="button.id"
      :icon="button.icon"
      @click="toPage(button.page)"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonFab from '@/components/ButtonFab'
import router from '@/router'
import { useRoute } from 'vue-router'

const buttons = ref([
  { id: 1, icon: 'user', page: 'user' },
  { id: 2, icon: 'plus', page: 'new' },
  { id: 3, icon: useRoute().name === 'list' ? 'search' : 'arrow-left', page: '/' }
])

const route = useRoute()

console.log(route)

function toPage (page: string) {
  router.push(page)
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.menu {
  display: flex;
  justify-content: space-between;
}
</style>
