# Blog Post Placeholder Images

## Overview
Each blog post now gets a unique, deterministic abstract placeholder image based on its Sanity ID. The images are SVG-based, lightweight, and match your site's topographic/GIS aesthetic.

## How It Works
- **7 different patterns** created: topographic lines, grid, hexagons, waves, dots, contours, and network nodes
- **Consistent assignment**: Each post gets the same placeholder every time (based on post ID hash)
- **Colors**: Uses your site's blue (#3b82f6) and purple (#8b5cf6) accent colors
- **Performance**: SVG data URLs = no extra HTTP requests

## Patterns Available

1. **Topographic Lines** - Flowing contour lines reminiscent of elevation maps
2. **Grid** - Coordinate grid system with overlaid circles
3. **Hexagon** - Tessellated hexagon pattern (classic GIS visualization)
4. **Wave** - Smooth wave patterns with data points
5. **Dots** - Regular dot pattern with concentric circles
6. **Contour** - Elliptical contour rings (like topographic elevation)
7. **Network** - Connected nodes graph pattern

## Usage

### In Blog Cards (Homepage)
```tsx
<BlogCard 
  title={post.title}
  excerpt={post.excerpt}
  date={post.publishedAt}
  readTime={post.readTime}
  postId={post._id}  // ← Required for placeholder selection
/>
```

### In Full Blog Post Page
The placeholder automatically appears at the top of each blog post as a hero image.

## Customization

To add more patterns, edit `/src/utils/blogPlaceholders.ts` and add new entries to the `blogPlaceholders` array.

To change colors:
- Replace `#3b82f6` (blue) with your desired primary color
- Replace `#8b5cf6` (purple) with your desired secondary color
- Replace gradient stops (`#1e293b`, `#0f172a`) for background variations

## Future Enhancements

Consider adding:
- Sanity image field for custom featured images
- Automatic gradient generation based on post tags
- Animated SVG patterns for more dynamism
- OpenGraph images for social sharing
