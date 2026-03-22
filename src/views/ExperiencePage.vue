<script setup>
import { computed } from 'vue'

import PortraitPanel from '../components/shared/PortraitPanel.vue'
import {
  formatExperience,
  getCompanySummaries,
  getTimelineDecorations,
  getTotalExperienceMonths,
} from '../utils/experience'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const roles = computed(() => getTimelineDecorations(props.portfolio.experience))
const totalExperience = computed(() => formatExperience(getTotalExperienceMonths(props.portfolio.experience)))
const companySummaries = computed(() => getCompanySummaries(props.portfolio.experience))
</script>

<template>
  <div class="page-stack">
    <section class="surface-card hero-lite">
      <p class="eyebrow">Experience Ledger</p>
      <h1>Work history that updates itself.</h1>
      <p>
        Tenure is calculated from the start and end dates below, including overall experience and time spent
        with a particular organization.
      </p>

      <div class="metric-row">
        <article class="metric-card">
          <span>Total Experience</span>
          <strong>{{ totalExperience }}</strong>
        </article>

        <article
          v-for="summary in companySummaries"
          :key="summary.company"
          class="metric-card"
        >
          <span>{{ summary.company }}</span>
          <strong>{{ summary.durationLabel }}</strong>
        </article>
      </div>

      <div class="hero-lite-portrait">
        <PortraitPanel :portrait="portfolio.portraits.experience" />
      </div>
    </section>

    <section class="timeline">
      <article v-for="role in roles" :key="`${role.company}-${role.title}-${role.start}`" class="timeline-card">
        <div class="timeline-rail">
          <span>{{ role.startMonth }}</span>
          <strong>{{ role.startYear }}</strong>
        </div>

        <div class="timeline-body surface-card">
          <div class="timeline-head">
            <div>
              <p class="eyebrow">{{ role.company }}</p>
              <h2>{{ role.title }}</h2>
            </div>

            <div class="timeline-meta">
              <strong>{{ role.durationLabel }}</strong>
              <span>{{ role.dateLabel }}</span>
              <span>{{ role.location }} · {{ role.type }}</span>
            </div>
          </div>

          <p class="timeline-summary">{{ role.summary }}</p>

          <ul class="bullet-list">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>

          <div class="pill-row">
            <span v-for="item in role.stack" :key="item" class="tag-pill">{{ item }}</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
