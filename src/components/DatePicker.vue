<template>
  <div class="block">
    <picker-element
      v-for="element in elements"
      :key="element"
      :element="element"
    />
  </div>
</template>

<script setup lang="ts">
import PickerElement from '@/components/PickerElement'
import { ref, computed } from 'vue'

// eslint-disable-next-line no-undef
const props = withDefaults(defineProps<{
  onDate?: boolean,
}>(), { onDate: true })

interface El {
  title: string,
  number: number,
  maximum?: number,
}

const d = ref(new Date())

const elements = computed(() => {
  const daysInMonth = new Date(d.value.getFullYear(), d.value.getMonth() + 1, 0).getDate()

  return [
    { title: 'Year', number: d.value.getFullYear() },
    { title: 'Month', number: d.value.getMonth() + 1, maximum: 12 },
    { title: 'Day', number: d.value.getDate(), maximum: daysInMonth },
    { title: 'Hours', number: d.value.getHours() + 1, maximum: 23 },
    { title: 'Minutes', number: d.value.getMinutes() }
  ]
})

</script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 360px;
}
</style>
