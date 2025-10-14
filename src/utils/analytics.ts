// Minimal analytics event dispatcher (placeholder for real integration)
export type AnalyticsEvent = {
  type: 'blog_modal_open' | 'blog_modal_close'
  slug?: string
  timestamp: number
}

const listeners: ((e: AnalyticsEvent) => void)[] = []

export function track(event: Omit<AnalyticsEvent, 'timestamp'>) {
  const full: AnalyticsEvent = { ...event, timestamp: Date.now() }
  // For now just log. Replace with real endpoint/sendBeacon.
  if (import.meta.env.DEV) {
    console.log('[analytics]', full)
  }
  // Forward to Google Analytics if gtag present
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', full.type, {
        event_category: 'custom',
        event_label: full.slug ?? undefined,
        slug: full.slug,
        timestamp: full.timestamp,
      })
    } catch (e) {
      if (import.meta.env.DEV) console.warn('gtag event failed', e)
    }
  }
  listeners.forEach(l => l(full))
}

export function onAnalytics(listener: (e: AnalyticsEvent) => void) {
  listeners.push(listener)
  return () => {
    const idx = listeners.indexOf(listener)
    if (idx >= 0) listeners.splice(idx, 1)
  }
}
