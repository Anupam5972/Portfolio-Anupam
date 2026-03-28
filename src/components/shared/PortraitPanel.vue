<script setup>
const props = defineProps({
  portrait: {
    type: Object,
    required: true,
  },
  initials: {
    type: String,
    default: 'AM',
  },
})

const variantClass = `portrait-${props.portrait.variant || 'hero'}`
</script>

<template>
  <article class="portrait-panel" :class="variantClass">
    <img
      v-if="portrait.image"
      class="portrait-image"
      :src="portrait.image"
      :alt="portrait.title"
    >
    <div class="portrait-glow"></div>
    <div v-if="!['hero', 'project'].includes(portrait.variant)" class="portrait-content">
      <h3>{{ portrait.title }}</h3>
      <p>{{ portrait.note }}</p>
    </div>
  </article>
</template>
