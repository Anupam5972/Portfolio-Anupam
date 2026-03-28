<script setup>
import LazySection from '../components/shared/LazySection.vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true,
  },
})

const heroBackgroundStyle = props.portfolio.portraits.projects.image
  ? {
      backgroundImage: `linear-gradient(90deg, rgba(8, 14, 26, 0.92) 0%, rgba(8, 14, 26, 0.82) 42%, rgba(8, 14, 26, 0.52) 100%), url(${props.portfolio.portraits.projects.image})`,
    }
  : {}
</script>

<template>
  <div class="page-stack">
    <section class="surface-card hero-lite hero-lite-projects" :style="heroBackgroundStyle">
      <p class="eyebrow">Project Archive</p>
      <h1>Selected builds, outcomes, and placeholders for deeper stories.</h1>
      <p>
        This page mixes shipped work with a reserved slot for future case studies, so the site can grow
        without redesigning the structure.
      </p>
    </section>

    <section class="project-grid">
      <LazySection
        v-for="project in portfolio.projects"
        :key="project.name"
        as="article"
        class="surface-card project-card"
        min-height="24rem"
      >
        <div class="project-topline">
          <span class="eyebrow">{{ project.category }}</span>
          <span class="project-status">{{ project.status }}</span>
        </div>

        <h2>{{ project.name }}</h2>
        <p class="project-period">{{ project.period }}</p>
        <p>{{ project.description }}</p>

        <div class="project-highlight">
          <strong>{{ project.highlight }}</strong>
        </div>

        <ul class="bullet-list">
          <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
        </ul>

        <div class="pill-row">
          <span v-for="item in project.stack" :key="item" class="tag-pill">{{ item }}</span>
        </div>
      </LazySection>
    </section>
  </div>
</template>
