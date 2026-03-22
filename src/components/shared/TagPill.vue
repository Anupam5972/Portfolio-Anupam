<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="tag-pill">{{ label }}</span>
</template>
