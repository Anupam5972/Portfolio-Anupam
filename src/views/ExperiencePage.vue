<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import LazySection from '../components/shared/LazySection.vue'

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
const companySummaries = computed(() => getCompanySummaries(props.portfolio.experience).map((summary) => ({
  ...summary,
  logo: props.portfolio.experience.find((role) => role.company === summary.company)?.logo ?? '',
})))
const mobileExpandedRole = ref(null)
const isMobileTimeline = ref(false)

const updateIsMobileTimeline = () => {
  isMobileTimeline.value = window.matchMedia('(max-width: 760px)').matches

  if (!isMobileTimeline.value) {
    mobileExpandedRole.value = null
  }
}

const getRoleKey = (role) => `${role.company}-${role.title}-${role.start}`

const toggleRole = (role) => {
  if (!isMobileTimeline.value) {
    return
  }

  const roleKey = getRoleKey(role)
  mobileExpandedRole.value = mobileExpandedRole.value === roleKey ? null : roleKey
}

const onRoleKeydown = (event, role) => {
  if (!isMobileTimeline.value || (event.key !== 'Enter' && event.key !== ' ')) {
    return
  }

  event.preventDefault()
  toggleRole(role)
}

const heroBackgroundStyle = props.portfolio.portraits.experience.image
  ? {
      backgroundImage: `linear-gradient(90deg, rgba(8, 14, 26, 0.94) 0%, rgba(8, 14, 26, 0.84) 42%, rgba(8, 14, 26, 0.56) 100%), url(${props.portfolio.portraits.experience.image})`,
    }
  : {}

onMounted(() => {
  updateIsMobileTimeline()
  window.addEventListener('resize', updateIsMobileTimeline)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobileTimeline)
})

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
    </section>

    <LazySection class="surface-card" min-height="10rem">
      <div class="metric-row experience-metrics">
        <article class="metric-card">
          <span>Total Experience</span>
          <strong>{{ totalExperience }}</strong>
        </article>

        <article
          v-for="summary in companySummaries"
          :key="summary.company"
          class="metric-card metric-card-company"
        >
          <div class="metric-card-company-head">
            <img
              v-if="summary.logo"
              class="metric-card-logo"
              :src="summary.logo"
              :alt="`${summary.company} logo`"
            >
            <span class="metric-card-label">{{ summary.company }}</span>
          </div>
          <strong>{{ summary.durationLabel }}</strong>
        </article>
      </div>
    </LazySection>

    <section class="timeline">
      <LazySection
        v-for="role in roles"
        :id="role.end === null ? 'present-work' : undefined"
        :key="getRoleKey(role)"
        as="article"
        class="timeline-card"
        min-height="28rem"
      >
        <div class="timeline-rail">
          <div class="timeline-date">
            <span>{{ role.startMonth }}</span>
            <strong>{{ role.startYear }}</strong>
          </div>
        </div>

        <div
          class="timeline-body surface-card"
          :class="{
            'timeline-body-collapsible': isMobileTimeline,
            'timeline-body-expanded': isMobileTimeline && mobileExpandedRole === getRoleKey(role),
          }"
          :role="isMobileTimeline ? 'button' : undefined"
          :tabindex="isMobileTimeline ? 0 : undefined"
          :aria-expanded="isMobileTimeline ? String(mobileExpandedRole === getRoleKey(role)) : undefined"
          @click="toggleRole(role)"
          @keydown="onRoleKeydown($event, role)"
        >
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
              <div class="timeline-meta-topline">
                <button
                  v-if="role.end === null"
                  type="button"
                  class="current-role-badge"
                >
                  Current
                </button>
                <strong>{{ role.durationLabel }}</strong>
              </div>
              <span>{{ role.dateLabel }}</span>
              <span>{{ role.location }} · {{ role.type }}</span>
            </div>
          </div>

          <p class="timeline-summary">{{ role.summary }}</p>

          <ul class="timeline-expandable bullet-list">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>

          <div class="timeline-expandable pill-row">
            <span v-for="item in role.stack" :key="item" class="tag-pill">{{ item }}</span>
          </div>
        </div>
      </LazySection>
    </section>
  </div>
</template>
