<script setup>
import SectionBlock from '../components/layout/SectionBlock.vue'
import InfoCard from '../components/shared/InfoCard.vue'

defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <SectionBlock
    id="skills"
    eyebrow="Capabilities"
    title="Tools & Strengths"
    description="A small snapshot of the tools and thinking I use to build practical web experiences."
  >
    <div class="cards-grid cards-grid-three">
      <InfoCard v-for="skill in skills" :key="skill.name" :title="skill.name" :text="skill.detail" />
    </div>
  </SectionBlock>
</template>
