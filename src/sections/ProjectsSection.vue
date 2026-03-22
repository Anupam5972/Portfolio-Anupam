<script setup>
import SectionBlock from '../components/layout/SectionBlock.vue'
import InfoCard from '../components/shared/InfoCard.vue'
import TagPill from '../components/shared/TagPill.vue'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <SectionBlock
    id="projects"
    eyebrow="Selected Work"
    title="Projects"
    description="Each block is structured so you can later replace placeholders with real case studies, links, or screenshots."
  >
    <div class="cards-grid cards-grid-three">
      <InfoCard v-for="project in projects" :key="project.name" :title="project.name" :text="project.description">
        <p class="card-kicker">{{ project.category }}</p>
        <div class="pill-row">
          <TagPill v-for="item in project.stack" :key="item" :label="item" />
        </div>
      </InfoCard>
    </div>
  </SectionBlock>
</template>
