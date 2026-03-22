<script setup>
import { computed, ref } from 'vue'
import PortraitPanel from '../shared/PortraitPanel.vue'

const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
  currentOrg: {
    type: Object,
    required: true,
  },
  portrait: {
    type: Object,
    required: true,
  },
})

const pointer = ref({ x: 0, y: 0 })

const layerStyle = computed(() => ({
  transform: `translate3d(${pointer.value.x * 18}px, ${pointer.value.y * 18}px, 0)`,
}))

const panelStyle = computed(() => ({
  transform: `translate3d(${pointer.value.x * -12}px, ${pointer.value.y * -12}px, 0)`,
}))

function handleMove(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5
  pointer.value = { x, y }
}

function resetMove() {
  pointer.value = { x: 0, y: 0 }
}
</script>

<template>
  <section class="hero-slab" @mousemove="handleMove" @mouseleave="resetMove">
    <div class="hero-copy">
      <p class="eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.headline }}</h1>
      <p class="hero-summary">{{ hero.summary }}</p>

      <div class="hero-actions">
        <a class="button button-primary" :href="hero.primaryCta.href">{{ hero.primaryCta.label }}</a>
        <a class="button button-secondary" :href="hero.secondaryCta.href">{{ hero.secondaryCta.label }}</a>
      </div>
    </div>

    <div class="hero-stage">
      <div class="orbital orbital-large" :style="layerStyle"></div>
      <div class="orbital orbital-small" :style="panelStyle"></div>

      <div class="hero-portrait-wrap" :style="layerStyle">
        <PortraitPanel :portrait="portrait" />
      </div>

      <div class="hero-panel" :style="panelStyle">
        <p class="eyebrow">Now Orbiting</p>
        <h2>{{ currentOrg.company }}</h2>
        <p>{{ currentOrg.title }}</p>
        <strong>{{ currentOrg.durationLabel }}</strong>
        <ul class="hero-note-list">
          <li v-for="note in hero.orbitNotes" :key="note">{{ note }}</li>
        </ul>
      </div>
    </div>

    <div class="metric-row">
      <article v-for="stat in stats" :key="stat.label" class="metric-card">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
      </article>
    </div>
  </section>
</template>
