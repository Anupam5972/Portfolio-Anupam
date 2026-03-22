<script setup>
import { computed } from 'vue'

import AppShell from './components/layout/AppShell.vue'
import portfolio from './data/portfolio'
import ExperiencePage from './views/ExperiencePage.vue'
import HomePage from './views/HomePage.vue'
import LabPage from './views/LabPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'home',
  },
})

const currentView = computed(() => {
  const views = {
    home: HomePage,
    experience: ExperiencePage,
    projects: ProjectsPage,
    lab: LabPage,
  }

  return views[props.currentPage] ?? HomePage
})
</script>

<template>
  <AppShell :current-page="currentPage" :navigation="portfolio.navigation" :identity="portfolio.identity">
    <component :is="currentView" :portfolio="portfolio" />
  </AppShell>
</template>
