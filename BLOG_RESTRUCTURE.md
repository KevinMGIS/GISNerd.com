# Blog Restructure Summary

## Changes Made (October 31, 2025)

### 1. Homepage Blog Section (`/src/sections/Blog.tsx`)
**Before:**
- Showed 6 posts in horizontal scroll
- Complex scroll controls and state management
- Wider layout with cards side-by-side

**After:**
- Shows only 3 most recent posts
- Vertical stack layout (max-width: 4xl)
- Added "View All →" link to dedicated blog page
- Simplified code (removed scroll refs and controls)
- Changed heading from "Latest Posts" to "Recent Posts"

### 2. New Dedicated Blog Page (`/src/pages/BlogListPage.tsx`)
**Features:**
- Shows ALL blog posts from Sanity
- 3-column grid layout (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Sorted by most recent first
- Back navigation to home
- SEO optimized
- Same blog card styling as homepage
- Loading state handling

**URL:** `https://gisnerd.com/blog`

### 3. Navigation Updates (`/src/App.tsx`)
**Before:**
- Blog was hash link: `<a href="#blog">`
- Scrolled to blog section on homepage

**After:**
- Blog is route link: `<Link to="/blog">`
- Navigates to dedicated blog page
- Added route: `<Route path="/blog" element={<BlogListPage />} />`

### 4. Sitemap Update (`/public/sitemap.xml`)
- Added `/blog` page entry with priority 0.9
- Updated lastmod dates to 2025-10-31

## Site Structure

### Homepage (`/`)
```
- Hero
- Recent Posts (3 latest) ← vertical stack
- Skills
- Contact
```

### Blog Page (`/blog`)
```
- Header with back navigation
- All Posts (grid layout)
- Footer
```

### Individual Post (`/blog/:slug`)
```
- Existing blog post page
- No changes made
```

## Navigation Menu
1. **Blog** → `/blog` (route - dedicated page)
2. **Skills** → `#skills` (hash - homepage section)
3. **Portfolio** → `/portfolio` (route - dedicated page)
4. **Contact** → `#contact` (hash - homepage section)

## Benefits
✅ Cleaner homepage with focused content (3 posts)
✅ Dedicated blog archive for all posts
✅ Better mobile experience (vertical stack vs horizontal scroll)
✅ Consistent navigation pattern (Blog + Portfolio are pages, Skills + Contact are sections)
✅ SEO benefits with dedicated blog page
✅ Easier to browse all posts in grid layout
