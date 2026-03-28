<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { sitePaths, withBase } from '@/utils/sitePaths'

const props = defineProps({
  currentPage: {
    type: String,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
  identity: {
    type: Object,
    required: true,
  },
})

const brandImage = withBase('images/anupam.png')
const isMenuOpen = ref(false)
const currentNavLabel = computed(() => {
  const activeItem = props.navigation.find((item) => item.id === props.currentPage)
  return activeItem?.label ?? 'Navigation'
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function syncMenuForViewport() {
  if (window.innerWidth > 560) {
    closeMenu()
  }
}

onMounted(() => {
  syncMenuForViewport()
  window.addEventListener('resize', syncMenuForViewport)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncMenuForViewport)
})
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <a class="brand-mark" :href="sitePaths.home">
        <img class="brand-avatar" :src="brandImage" alt="Anupam Moharana">
        <span>
          <strong>{{ identity.name }}</strong>
          <small>{{ identity.role }}</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="site-nav"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="menu-toggle-label">{{ currentNavLabel }}</span>
        <span class="menu-toggle-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav
        id="site-nav"
        class="site-nav"
        :class="{ 'site-nav-open': isMenuOpen }"
        aria-label="Primary"
      >
        <a
          v-for="item in props.navigation"
          :key="item.id"
          class="nav-link"
          :class="{ 'nav-link-active': item.id === props.currentPage }"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </header>

    <main class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <div>
        <strong>{{ identity.availability }}</strong>
        <p>{{ identity.location }} · {{ identity.email }}</p>
      </div>

      <a class="footer-link" href="mailto:anupam205@outlook.com">anupam205@outlook.com</a>
    </footer>
  </div>
</template>
