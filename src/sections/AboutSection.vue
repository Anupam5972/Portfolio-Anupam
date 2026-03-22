<script setup>
import SectionBlock from '../components/layout/SectionBlock.vue'
import InfoCard from '../components/shared/InfoCard.vue'

defineProps({
  about: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock id="about" eyebrow="Introduction" :title="about.title" :description="about.description">
    <div class="cards-grid cards-grid-two">
      <InfoCard
        v-for="highlight in about.highlights"
        :key="highlight"
        title="What I Bring"
        :text="highlight"
      />
    </div>
  </SectionBlock>
</template>
