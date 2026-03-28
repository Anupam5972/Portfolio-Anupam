<script setup>
import { computed } from 'vue'

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

const heroBackgroundStyle = props.portfolio.portraits.experience.image
  ? {
      backgroundImage: `linear-gradient(90deg, rgba(8, 14, 26, 0.94) 0%, rgba(8, 14, 26, 0.84) 42%, rgba(8, 14, 26, 0.56) 100%), url(${props.portfolio.portraits.experience.image})`,
    }
  : {}

</script>

<template>
  <div class="page-stack">
    <section class="surface-card hero-lite hero-lite-experience" :style="heroBackgroundStyle">
      <p class="eyebrow">Career Patch Notes</p>
      <h1>The bug-free-ish timeline of how I got here.</h1>
      <p>
        A running log of roles, systems, and increasingly serious responsibility. The dates do the math, so I
        can keep the storytelling human.
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
    </section>

    <section class="timeline">
      <article
        v-for="role in roles"
        :id="role.end === null ? 'present-work' : undefined"
        :key="`${role.company}-${role.title}-${role.start}`"
        class="timeline-card"
      >
        <div class="timeline-rail">
          <div class="timeline-date">
            <span>{{ role.startMonth }}</span>
            <strong>{{ role.startYear }}</strong>
          </div>
        </div>

        <div class="timeline-body surface-card">
          <div class="timeline-head">
            <div class="timeline-role">
              <div class="company-mark-wrap">
                <img
                  v-if="role.logo"
                  class="company-mark-image"
                  :src="role.logo"
                  :alt="`${role.company} logo`"
                >
              </div>

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
