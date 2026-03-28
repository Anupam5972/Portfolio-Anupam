<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'

import AppShell from './components/layout/AppShell.vue'
import portfolio from './data/portfolio'
import { getPageFromPath, isInternalPath } from './utils/sitePaths'
import ExperiencePage from './views/ExperiencePage.vue'
import HomePage from './views/HomePage.vue'
import LabPage from './views/LabPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'

const currentPage = ref(getPageFromPath())

const views = {
  home: HomePage,
  experience: ExperiencePage,
  projects: ProjectsPage,
  lab: LabPage,
}

const pageTitles = {
  home: 'Anupam Moharana | Home',
  experience: 'Anupam Moharana | Experience',
  projects: 'Anupam Moharana | Projects',
  lab: 'Anupam Moharana | Lab',
}

const currentView = computed(() => views[currentPage.value] ?? HomePage)
const cachedView = shallowRef(currentView.value)

function syncCurrentPage() {
  currentPage.value = getPageFromPath()
}

function scrollToHash(hash = window.location.hash) {
  if (!hash) {
    return
  }

  nextTick(() => {
    const target = document.querySelector(hash)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function handlePopState() {
  syncCurrentPage()
  scrollToHash()
}

function handleDocumentClick(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  const link = event.target.closest('a[href]')
  if (!link || link.target === '_blank' || link.hasAttribute('download')) {
    return
  }

  const href = link.getAttribute('href')
  if (!isInternalPath(href)) {
    return
  }

  const url = new URL(href, window.location.origin)
  event.preventDefault()
  window.history.pushState({}, '', `${url.pathname}${url.hash}`)
  syncCurrentPage()
  scrollToHash(url.hash)
}

watch(currentView, (view) => {
  cachedView.value = view
}, { immediate: true })

watch(currentPage, (page) => {
  document.title = pageTitles[page] ?? pageTitles.home
})

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  window.addEventListener('popstate', handlePopState)
  document.title = pageTitles[currentPage.value] ?? pageTitles.home
  scrollToHash()
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
  window.removeEventListener('popstate', handlePopState)
})
</script>

<template>
  <AppShell :current-page="currentPage" :navigation="portfolio.navigation" :identity="portfolio.identity">
    <KeepAlive>
      <component :is="cachedView" :portfolio="portfolio" :key="currentPage" />
    </KeepAlive>
  </AppShell>
</template>
