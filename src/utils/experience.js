const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMonth(value) {
  if (!value) {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }

  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

function toMonthIndex(value) {
  const { year, month } = parseMonth(value)
  return year * 12 + (month - 1)
}

function fromMonthIndex(index) {
  const year = Math.floor(index / 12)
  const month = (index % 12) + 1
  return { year, month }
}

function diffInMonths(start, end) {
  return toMonthIndex(end) - toMonthIndex(start) + 1
}

function formatMonth(value) {
  const { year, month } = parseMonth(value)
  return `${MONTH_NAMES[month - 1]} ${year}`
}

function formatRange(start, end) {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Present'}`
}

function formatDuration(months) {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  const parts = []

  if (years) {
    parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  }

  if (remainingMonths) {
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`)
  }

  return parts.join(' ') || '0 mos'
}

function mergeIntervals(intervals) {
  if (!intervals.length) {
    return []
  }

  const sorted = [...intervals].sort((left, right) => left.start - right.start)
  const merged = [sorted[0]]

  for (const interval of sorted.slice(1)) {
    const previous = merged[merged.length - 1]

    if (interval.start <= previous.end + 1) {
      previous.end = Math.max(previous.end, interval.end)
      continue
    }

    merged.push({ ...interval })
  }

  return merged
}

export function getRoleDuration(role) {
  return diffInMonths(role.start, role.end)
}

export function getRoleDateLabel(role) {
  return formatRange(role.start, role.end)
}

export function getRoleDurationLabel(role) {
  return formatDuration(getRoleDuration(role))
}

export function getTotalExperienceMonths(roles) {
  const intervals = roles.map((role) => ({
    start: toMonthIndex(role.start),
    end: toMonthIndex(role.end),
  }))

  return mergeIntervals(intervals).reduce((total, interval) => {
    return total + (interval.end - interval.start + 1)
  }, 0)
}

export function getCompanyExperienceMonths(roles, company) {
  const companyRoles = roles
    .filter((role) => role.company === company)
    .map((role) => ({
      start: toMonthIndex(role.start),
      end: toMonthIndex(role.end),
    }))

  return mergeIntervals(companyRoles).reduce((total, interval) => {
    return total + (interval.end - interval.start + 1)
  }, 0)
}

export function getCompanySummaries(roles) {
  const companies = [...new Set(roles.map((role) => role.company))]

  return companies.map((company) => {
    const months = getCompanyExperienceMonths(roles, company)
    const companyRoles = roles.filter((role) => role.company === company)
    const ranges = companyRoles.map((role) => getRoleDateLabel(role)).join(' / ')

    return {
      company,
      months,
      durationLabel: formatDuration(months),
      roleCount: companyRoles.length,
      ranges,
    }
  })
}

export function formatExperience(months) {
  return formatDuration(months)
}

export function getTimelineDecorations(roles) {
  return roles.map((role) => {
    const { year, month } = fromMonthIndex(toMonthIndex(role.start))

    return {
      ...role,
      startYear: year,
      startMonth: MONTH_NAMES[month - 1],
      dateLabel: getRoleDateLabel(role),
      durationLabel: getRoleDurationLabel(role),
    }
  })
}
