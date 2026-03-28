<script setup>
import { computed } from 'vue'

import EasterEggBoard from '../components/interactive/EasterEggBoard.vue'
import ParallaxHero from '../components/interactive/ParallaxHero.vue'
import LazySection from '../components/shared/LazySection.vue'
import PortraitPanel from '../components/shared/PortraitPanel.vue'
import { sitePaths, withBase } from '../utils/sitePaths'
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
  { label: 'Core Stack', value: 'Java + Spring Boot + UI/UX' },
])

const currentOrg = computed(() => ({
  ...props.portfolio.experience[0],
  durationLabel: formatExperience(getCompanyExperienceMonths(props.portfolio.experience, 'GE HealthCare')),
}))

const currentOrgBanner = withBase('images/logos/ge-healthcare-full.png')
</script>

<template>
  <div class="page-stack">
    <ParallaxHero
      :hero="portfolio.hero"
      :stats="stats"
      :current-org="currentOrg"
      :portrait="portfolio.portraits.home"
    />

    <LazySection class="content-grid" min-height="28rem">
      <article class="surface-card story-card">
        <p class="eyebrow">Profile</p>
        <h2>Engineering with a systems lens.</h2>
        <p>{{ portfolio.about.lead }}</p>
        <ul class="bullet-list">
          <li v-for="point in portfolio.about.points" :key="point">{{ point }}</li>
        </ul>
      </article>

      <article class="surface-card rail-card">
        <p class="eyebrow">Currently Shipping</p>
        <h2>{{ `Working at ${currentOrg.company} as ${currentOrg.title}.` }}</h2>
        <img class="company-banner" :src="currentOrgBanner" alt="GE HealthCare">
        <p>
          {{ `Right now I’m building in ${currentOrg.location}, where I’ve been working across production systems for ${currentOrg.durationLabel}.` }}
        </p>
        <a class="text-link" :href="`${sitePaths.experience}#present-work`">Inspect the experience timeline</a>
      </article>

      <PortraitPanel :portrait="portfolio.portraits.projects" />
    </LazySection>

    <LazySection class="surface-card" min-height="20rem">
      <div class="section-head">
        <div>
          <p class="eyebrow">Focus Areas</p>
          <h2>What I like building</h2>
        </div>
        <a class="text-link" :href="sitePaths.projects">See project notes</a>
      </div>

      <div class="feature-grid">
        <article v-for="area in portfolio.focusAreas" :key="area.title" class="feature-card">
          <h3>{{ area.title }}</h3>
          <p>{{ area.text }}</p>
        </article>
      </div>
    </LazySection>

    <LazySection class="surface-card" min-height="18rem">
      <div class="section-head">
        <div>
          <p class="eyebrow">Hidden Switches</p>
          <h2>Click around a little.</h2>
        </div>
        <a class="text-link" :href="sitePaths.lab">Open the lab</a>
      </div>

      <EasterEggBoard :items="portfolio.experiments.slice(0, 2)" />
    </LazySection>
  </div>
</template>
