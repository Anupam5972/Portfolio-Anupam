<script setup>
import { sitePaths, withBase } from '@/utils/sitePaths'

defineProps({
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

      <nav class="site-nav" aria-label="Primary">
        <a
          v-for="item in navigation"
          :key="item.id"
          class="nav-link"
          :class="{ 'nav-link-active': item.id === currentPage }"
          :href="item.href"
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
