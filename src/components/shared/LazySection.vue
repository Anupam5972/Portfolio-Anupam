<script setup>
import { computed, onMounted, onUnmounted, ref, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  as: {
    type: String,
    default: 'section',
  },
  eager: {
    type: Boolean,
    default: false,
  },
  minHeight: {
    type: String,
    default: '',
  },
  rootMargin: {
    type: String,
    default: '240px 0px',
  },
  threshold: {
    type: Number,
    default: 0,
  },
})

const attrs = useAttrs()
const host = ref(null)
const isVisible = ref(props.eager)

const placeholderStyle = computed(() => (
  props.minHeight
    ? { minHeight: props.minHeight }
    : {}
))

let observer

onMounted(() => {
  if (props.eager || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) {
      return
    }

    isVisible.value = true
    observer?.disconnect()
    observer = null
  }, {
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  })

  if (host.value) {
    observer.observe(host.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <component :is="props.as" ref="host" v-bind="attrs">
    <slot v-if="isVisible" />
    <div v-else class="lazy-placeholder" :style="placeholderStyle" aria-hidden="true"></div>
  </component>
</template>
