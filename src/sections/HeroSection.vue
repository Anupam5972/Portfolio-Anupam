<script setup>
defineProps({
  hero: {
    type: Object,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-copy">
      <p class="hero-eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.name }}</h1>
      <p class="hero-title">{{ hero.title }}</p>
      <p class="hero-summary">{{ hero.summary }}</p>

      <div class="hero-actions">
        <a class="button button-primary" :href="hero.primaryCta.href">{{ hero.primaryCta.label }}</a>
        <a class="button button-secondary" :href="hero.secondaryCta.href">
          {{ hero.secondaryCta.label }}
        </a>
      </div>
    </div>

    <div class="hero-panel">
      <p class="hero-panel-label">Focus Areas</p>
      <ul class="hero-panel-list">
        <li>Reusable Vue components</li>
        <li>Responsive visual design</li>
        <li>Clean, scalable frontend structure</li>
      </ul>

      <div class="stats-grid">
        <article v-for="stat in stats" :key="stat.label" class="stat-card">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
