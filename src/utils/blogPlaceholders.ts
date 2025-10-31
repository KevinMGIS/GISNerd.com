// Blog post placeholder images - abstract patterns matching the site theme
export const blogPlaceholders = [
  // Topographic lines pattern
  {
    id: 'topo-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad1)"/>
      <path d="M 0 200 Q 200 150 400 200 T 800 200" stroke="#ff6b35" stroke-width="2" fill="none" opacity="0.3"/>
      <path d="M 0 220 Q 200 170 400 220 T 800 220" stroke="#ff6b35" stroke-width="2" fill="none" opacity="0.3"/>
      <path d="M 0 240 Q 200 190 400 240 T 800 240" stroke="#ff6b35" stroke-width="2" fill="none" opacity="0.3"/>
      <path d="M 0 180 Q 200 130 400 180 T 800 180" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.2"/>
      <path d="M 0 260 Q 200 210 400 260 T 800 260" stroke="#94a3b8" stroke-width="2" fill="none" opacity="0.2"/>
    </svg>`,
  },
  // Grid pattern
  {
    id: 'grid-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad2)"/>
      ${Array.from({ length: 20 }, (_, i) => 
        `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="400" stroke="#94a3b8" stroke-width="1" opacity="0.1"/>`
      ).join('')}
      ${Array.from({ length: 10 }, (_, i) => 
        `<line x1="0" y1="${i * 40}" x2="800" y2="${i * 40}" stroke="#94a3b8" stroke-width="1" opacity="0.1"/>`
      ).join('')}
      <circle cx="200" cy="200" r="80" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.3"/>
      <circle cx="600" cy="200" r="60" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.3"/>
    </svg>`,
  },
  // Hexagon pattern
  {
    id: 'hex-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
        </linearGradient>
        <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,0 52,15 52,37 30,52 8,37 8,15" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#grad3)"/>
      <rect width="800" height="400" fill="url(#hexPattern)"/>
      <polygon points="400,150 450,180 450,240 400,270 350,240 350,180" fill="none" stroke="#ff6b35" stroke-width="3" opacity="0.5"/>
    </svg>`,
  },
  // Wave pattern
  {
    id: 'wave-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad4)"/>
      <path d="M0,200 Q200,150 400,200 T800,200" fill="none" stroke="#ff6b35" stroke-width="3" opacity="0.4"/>
      <path d="M0,220 Q200,170 400,220 T800,220" fill="none" stroke="#ff6b35" stroke-width="3" opacity="0.3"/>
      <path d="M0,240 Q200,190 400,240 T800,240" fill="none" stroke="#94a3b8" stroke-width="3" opacity="0.2"/>
      <circle cx="150" cy="150" r="5" fill="#ff6b35" opacity="0.6"/>
      <circle cx="350" cy="250" r="5" fill="#94a3b8" opacity="0.6"/>
      <circle cx="650" cy="180" r="5" fill="#ff6b35" opacity="0.6"/>
    </svg>`,
  },
  // Dots pattern
  {
    id: 'dots-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
        </linearGradient>
        <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#94a3b8" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#grad5)"/>
      <rect width="800" height="400" fill="url(#dotPattern)"/>
      <circle cx="400" cy="200" r="100" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.4"/>
      <circle cx="400" cy="200" r="60" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.4"/>
    </svg>`,
  },
  // Map contours
  {
    id: 'contour-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad6)"/>
      <ellipse cx="400" cy="200" rx="300" ry="150" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.3"/>
      <ellipse cx="400" cy="200" rx="250" ry="120" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.3"/>
      <ellipse cx="400" cy="200" rx="200" ry="90" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.3"/>
      <ellipse cx="400" cy="200" rx="150" ry="60" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.4"/>
      <ellipse cx="400" cy="200" rx="100" ry="40" fill="none" stroke="#ff6b35" stroke-width="2" opacity="0.4"/>
    </svg>`,
  },
  // Network nodes
  {
    id: 'network-1',
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0a0a0a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad7)"/>
      <line x1="200" y1="150" x2="400" y2="200" stroke="#94a3b8" stroke-width="2" opacity="0.3"/>
      <line x1="400" y1="200" x2="600" y2="150" stroke="#94a3b8" stroke-width="2" opacity="0.3"/>
      <line x1="200" y1="150" x2="300" y2="300" stroke="#ff6b35" stroke-width="2" opacity="0.2"/>
      <line x1="600" y1="150" x2="500" y2="300" stroke="#ff6b35" stroke-width="2" opacity="0.2"/>
      <circle cx="200" cy="150" r="8" fill="#ff6b35" opacity="0.6"/>
      <circle cx="400" cy="200" r="10" fill="#94a3b8" opacity="0.6"/>
      <circle cx="600" cy="150" r="8" fill="#ff6b35" opacity="0.6"/>
      <circle cx="300" cy="300" r="6" fill="#94a3b8" opacity="0.5"/>
      <circle cx="500" cy="300" r="6" fill="#ff6b35" opacity="0.5"/>
    </svg>`,
  },
]

// Function to get a consistent placeholder for a post based on its ID
export function getPlaceholderForPost(postId: string): string {
  // Use post ID to deterministically select a placeholder
  const hash = postId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const index = hash % blogPlaceholders.length
  const placeholder = blogPlaceholders[index]
  
  // Convert SVG to data URL
  return `data:image/svg+xml,${encodeURIComponent(placeholder.svg)}`
}
