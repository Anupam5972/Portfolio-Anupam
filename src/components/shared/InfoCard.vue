<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="info-card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <slot />
  </article>
</template>
