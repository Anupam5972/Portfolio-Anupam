<script setup>
import EasterEggBoard from '../components/interactive/EasterEggBoard.vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const heroBackgroundStyle = props.portfolio.portraits.lab.image
  ? {
      backgroundImage: `linear-gradient(90deg, rgba(8, 14, 26, 0.94) 0%, rgba(8, 14, 26, 0.84) 42%, rgba(8, 14, 26, 0.56) 100%), url(${props.portfolio.portraits.lab.image})`,
    }
  : {}

const labNotes = [
  'Tiny interactions that make interfaces feel alive without getting in the user’s way.',
  'Ideas that start playful, then turn into reusable product patterns.',
  'Room for prototypes, system sketches, and the occasional engineered weirdness.',
]

const benchItems = [
  'Command-palette style navigation',
  'System design mini walkthroughs',
  'Interactive architecture maps',
]
</script>

<template>
  <div class="page-stack">
    <section class="surface-card hero-lite hero-lite-lab" :style="heroBackgroundStyle">
      <p class="eyebrow">R&D, But Make It Fun</p>
      <h1>Where ideas get poked, polished, and occasionally shipped.</h1>
      <p>
        This is the playground for interaction ideas, interface experiments, and side quests that do not fit
        neatly into a resume bullet but absolutely belong in the story.
      </p>
    </section>

    <EasterEggBoard :items="portfolio.experiments" />

    <section class="content-grid">
      <article class="surface-card">
        <p class="eyebrow">What Lives Here</p>
        <h2>Not demos. More like controlled chaos.</h2>
        <ul class="bullet-list">
          <li v-for="note in labNotes" :key="note">{{ note }}</li>
        </ul>
      </article>

      <article class="surface-card">
        <p class="eyebrow">On The Bench</p>
        <h2>Things worth building next.</h2>
        <div class="pill-row">
          <span v-for="item in benchItems" :key="item" class="tag-pill">{{ item }}</span>
        </div>
        <p>
          The goal is to keep this section evolving into a proper sandbox for product thinking, frontend
          motion, and system storytelling.
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
