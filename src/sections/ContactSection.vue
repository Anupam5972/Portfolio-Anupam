<script setup>
import SectionBlock from '../components/layout/SectionBlock.vue'

defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <SectionBlock
    id="contact"
    eyebrow="Contact"
    :title="contact.title"
    :description="contact.summary"
  >
    <div class="contact-panel">
      <a class="contact-email" :href="`mailto:${contact.email}`">{{ contact.email }}</a>

      <div class="contact-links">
        <a v-for="link in contact.links" :key="link.label" :href="link.href" target="_blank" rel="noreferrer">
          {{ link.label }}
        </a>
      </div>
    </div>
  </SectionBlock>
</template>
