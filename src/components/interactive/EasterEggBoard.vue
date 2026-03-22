<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeId = ref(null)

function toggleCard(id) {
  activeId.value = activeId.value === id ? null : id
}
</script>

<template>
  <div class="egg-grid">
    <button
      v-for="item in items"
      :key="item.id"
      class="egg-card"
      :class="{ 'egg-card-active': activeId === item.id }"
      type="button"
      @click="toggleCard(item.id)"
    >
      <span class="eyebrow">Easter Egg</span>
      <h3>{{ item.title }}</h3>
      <p>{{ activeId === item.id ? item.reveal : item.hint }}</p>
      <small>{{ activeId === item.id ? 'Click again to hide' : 'Click to reveal' }}</small>
    </button>
  </div>
</template>
