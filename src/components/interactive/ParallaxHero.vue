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

const pointer = ref({ x: 50, y: 50, active: false })

const spotlightStyle = computed(() => ({
  '--spotlight-x': `${pointer.value.x}%`,
  '--spotlight-y': `${pointer.value.y}%`,
  '--spotlight-opacity': pointer.value.active ? 1 : 0,
}))

function handleMove(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - bounds.left) / bounds.width) * 100
  const y = ((event.clientY - bounds.top) / bounds.height) * 100
  pointer.value = { x, y, active: true }
}

function resetMove() {
  pointer.value = { x: 50, y: 50, active: false }
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
      <div class="orbital orbital-large"></div>
      <div class="orbital orbital-small"></div>

      <div class="hero-portrait-wrap" :style="spotlightStyle">
        <PortraitPanel :portrait="portrait" />
      </div>

      <div class="hero-panel">
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
