<script setup>
import { computed } from 'vue'

import EasterEggBoard from '../components/interactive/EasterEggBoard.vue'
import ParallaxHero from '../components/interactive/ParallaxHero.vue'
import PortraitPanel from '../components/shared/PortraitPanel.vue'
import {
  formatExperience,
  getCompanyExperienceMonths,
  getTotalExperienceMonths,
} from '../utils/experience'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const totalExperience = computed(() => getTotalExperienceMonths(props.portfolio.experience))
const geExperience = computed(() => getCompanyExperienceMonths(props.portfolio.experience, 'GE HealthCare'))

const stats = computed(() => [
  { label: 'Total Experience', value: formatExperience(totalExperience.value) },
  { label: 'GE HealthCare', value: formatExperience(geExperience.value) },
  { label: 'Core Stack', value: 'Java + Spring Boot' },
])

const currentOrg = computed(() => ({
  ...props.portfolio.experience[0],
  durationLabel: formatExperience(getCompanyExperienceMonths(props.portfolio.experience, 'GE HealthCare')),
}))
</script>

<template>
  <div class="page-stack">
    <ParallaxHero
      :hero="portfolio.hero"
      :stats="stats"
      :current-org="currentOrg"
      :portrait="portfolio.portraits.home"
    />

    <section class="content-grid">
      <article class="surface-card story-card">
        <p class="eyebrow">Profile</p>
        <h2>Engineering with a systems lens.</h2>
        <p>{{ portfolio.about.lead }}</p>
        <ul class="bullet-list">
          <li v-for="point in portfolio.about.points" :key="point">{{ point }}</li>
        </ul>
      </article>

      <article class="surface-card rail-card">
        <p class="eyebrow">Trajectory</p>
        <h2>From internships to production systems.</h2>
        <p>
          The work history is dynamic across the site. Change a joining month once and the tenure labels,
          company durations, and overall experience recalculate automatically.
        </p>
        <a class="text-link" href="/experience.html">Inspect the experience timeline</a>
      </article>

      <PortraitPanel :portrait="portfolio.portraits.projects" />
    </section>

    <section class="surface-card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Focus Areas</p>
          <h2>What I like building</h2>
        </div>
        <a class="text-link" href="/projects.html">See project notes</a>
      </div>

      <div class="feature-grid">
        <article v-for="area in portfolio.focusAreas" :key="area.title" class="feature-card">
          <h3>{{ area.title }}</h3>
          <p>{{ area.text }}</p>
        </article>
      </div>
    </section>

    <section class="surface-card">
      <div class="section-head">
        <div>
          <p class="eyebrow">Hidden Switches</p>
          <h2>Click around a little.</h2>
        </div>
        <a class="text-link" href="/lab.html">Open the lab</a>
      </div>

      <EasterEggBoard :items="portfolio.experiments.slice(0, 2)" />
    </section>
  </div>
</template>
