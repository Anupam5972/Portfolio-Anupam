const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`

export function withBase(path = '') {
  const normalizedPath = path.replace(/^\/+/, '')

  if (!normalizedPath) {
    return baseUrl
  }

  return `${baseUrl}${normalizedPath}`
}

export const sitePaths = Object.freeze({
  home: withBase(''),
  experience: withBase('experience/'),
  projects: withBase('projects/'),
  lab: withBase('lab/'),
})

const routeEntries = [
  ['home', sitePaths.home],
  ['experience', sitePaths.experience],
  ['projects', sitePaths.projects],
  ['lab', sitePaths.lab],
]

function normalizePath(pathname) {
  if (!pathname) {
    return baseUrl
  }

  const withoutIndex = pathname.endsWith('/index.html')
    ? pathname.slice(0, -'index.html'.length)
    : pathname

  if (withoutIndex === baseUrl.slice(0, -1)) {
    return baseUrl
  }

  return withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`
}

export function getPageFromPath(pathname = window.location.pathname) {
  const normalizedPath = normalizePath(pathname)
  const matchedRoute = routeEntries.find(([, path]) => path === normalizedPath)
  return matchedRoute?.[0] ?? 'home'
}

export function isInternalPath(href) {
  if (!href) {
    return false
  }

  try {
    const url = new URL(href, window.location.origin)
    return url.origin === window.location.origin && routeEntries.some(([, path]) => path === normalizePath(url.pathname))
  } catch {
    return false
  }
}
