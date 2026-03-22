<script setup>
import EasterEggBoard from '../components/interactive/EasterEggBoard.vue'
import PortraitPanel from '../components/shared/PortraitPanel.vue'

defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="page-stack">
    <section class="surface-card hero-lite">
      <p class="eyebrow">Curiosity Lab</p>
      <h1>Small interactions, hidden notes, and room for future experiments.</h1>
      <p>
        This page is intentionally a little strange. It gives you click targets, secret copy, and a place to
        add more intriguing interactions later without cluttering the core portfolio pages.
      </p>

      <div class="hero-lite-portrait">
        <PortraitPanel :portrait="portfolio.portraits.lab" />
      </div>
    </section>

    <EasterEggBoard :items="portfolio.experiments" />

    <section class="content-grid">
      <article class="surface-card">
        <p class="eyebrow">Placeholder Capsule</p>
        <h2>Future interactive idea</h2>
        <p>
          Placeholder: add a terminal-style command palette, architecture map, or “debug the system” mini
          interaction here later.
        </p>
      </article>

      <article class="surface-card">
        <p class="eyebrow">Contact Channel</p>
        <h2>{{ portfolio.contact.title }}</h2>
        <p>{{ portfolio.contact.summary }}</p>
        <div class="pill-row">
          <a v-for="link in portfolio.contact.links" :key="link.label" class="tag-pill tag-pill-link" :href="link.href">
            {{ link.label }}
          </a>
        </div>
      </article>
    </section>
  </div>
</template>
