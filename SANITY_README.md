# Sanity CMS Integration

Your GISNerd.com site now has Sanity CMS integrated! This allows you to manage blog posts through a beautiful editing interface.

## 🎯 What's Been Set Up

### Files Created:
- **`/src/lib/sanity.ts`** - Sanity client and query functions
- **`/sanity/schemas/post.ts`** - Blog post schema definition
- **`/sanity/schemas/index.ts`** - Schema exports
- **`/src/pages/StudioPage.tsx`** - Embedded Sanity Studio
- **`sanity.config.ts`** - Main Sanity configuration
- **`sanity.cli.ts`** - CLI configuration
- **`.env.example`** - Environment variable template

### Routes Added:
- **`/admin`** - Sanity Studio (CMS interface)

### Homepage:
- ✅ **Unchanged** - Your homepage stays exactly as it is

---

## 🚀 Getting Started

### 1. Access Sanity Studio

Start your dev server:
```bash
npm run dev
```

Then visit: **http://localhost:5173/admin**

### 2. First Time Login

You'll be prompted to log in with your Sanity account. Use the same account where you created project `yoep6909`.

### 3. Create Your First Blog Post

1. Click **"Post"** in the left sidebar
2. Click **"Create new document"**
3. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" to create URL-friendly slug
   - **Excerpt**: Short summary (max 200 chars)
   - **Content**: Write your blog post (rich text editor)
   - **Published At**: Set the date
   - **Tags**: Add tags (e.g., gis, projects, automation)
   - **Featured**: Toggle if you want it featured
   - **Read Time**: Estimated reading time (e.g., "5 min")
   - **Featured Image**: Upload an image (optional)
4. Click **"Publish"** in the bottom right

---

## 📝 Content Schema

### Blog Post Fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Title** | String | Yes | Blog post title |
| **Slug** | Slug | Yes | URL-friendly identifier |
| **Excerpt** | Text | Yes | Short summary (max 200 chars) |
| **Content** | Rich Text | No | Full blog post content |
| **Published At** | DateTime | Yes | Publication date |
| **Tags** | Array | No | Tag keywords |
| **Featured** | Boolean | No | Show in featured sections |
| **Read Time** | String | No | Estimated reading time |
| **Featured Image** | Image | No | Post thumbnail image |

### Rich Text Editor Features:
- ✅ Headings (H1, H2, H3)
- ✅ Bold, Italic, Code formatting
- ✅ Bullet and numbered lists
- ✅ Blockquotes
- ✅ Hyperlinks
- ✅ Inline images with alt text

---

## 🔄 Migrating Existing Blog Posts

Your current blog posts are still in `.tsx` files. You have two options:

### Option A: Keep Both Systems (Recommended Initially)
- Keep your existing posts as-is
- Start creating new posts in Sanity
- Gradually migrate old posts when you have time

### Option B: Migrate Everything Now
I can help you migrate all 7 existing blog posts to Sanity. Just ask and I'll:
1. Create a migration script
2. Convert all posts to Sanity
3. Update the blog display to fetch from Sanity

---

## 📊 API Functions Available

### Query Functions (already set up):

```typescript
import { getAllBlogPosts, getBlogPostBySlug, getFeaturedPosts } from './lib/sanity'

// Get all published posts
const posts = await getAllBlogPosts()

// Get a single post by slug
const post = await getBlogPostBySlug('building-siteiq')

// Get featured posts
const featured = await getFeaturedPosts(3)
```

---

## 🎨 Rendering Blog Content

To display Sanity blog posts, you'll use the `PortableText` component:

```tsx
import { PortableText } from '@portabletext/react'

function BlogPost({ content }) {
  return (
    <article>
      <PortableText value={content} />
    </article>
  )
}
```

---

## 🔧 Next Steps

### To Start Using Sanity for Your Blog:

1. **Test the Studio**: Visit `/admin` and create a test post
2. **Update Blog Component**: I can modify `src/sections/Blog.tsx` to fetch from Sanity
3. **Update Blog Modal/Detail**: Render Sanity content instead of TSX files
4. **Migrate Old Posts**: Copy your existing posts into Sanity

### Want Me to Do This Now?

I can update your blog to use Sanity right away. This would:
- ✅ Keep your homepage unchanged
- ✅ Fetch blog posts from Sanity instead of hardcoded files
- ✅ Use the same visual design
- ✅ Add loading states
- ✅ Keep all existing posts visible (we'll migrate them)

Just say the word and I'll make the switch!

---

## 🌐 Deployment Notes

### When Deploying to Production:

1. **Netlify/Vercel**: No extra configuration needed
2. **Studio URL**: Will be available at `yourdomain.com/admin`
3. **CORS**: Already configured for your domain
4. **Build**: Run `npm run build` as usual

### Environment Variables:

Currently hardcoded in `sanity.config.ts` and `src/lib/sanity.ts`:
- Project ID: `yoep6909`
- Dataset: `production`

If you want to use environment variables instead, let me know!

---

## 📚 Useful Links

- **Sanity Dashboard**: https://www.sanity.io/manage/personal/project/yoep6909
- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Cheat Sheet**: https://www.sanity.io/docs/query-cheat-sheet
- **Vision Tool**: Available in Studio to test queries

---

## 🆘 Troubleshooting

### "Cannot access /admin"
- Make sure dev server is running: `npm run dev`
- Clear browser cache and reload

### "Schema errors"
- Run: `npm run build` to check for TypeScript errors
- Check console for specific errors

### "Not authenticated"
- Log out of Sanity: https://www.sanity.io/manage
- Log back in through the `/admin` route

---

## 📞 Need Help?

Ask me to:
- Migrate your existing blog posts to Sanity
- Update the blog section to use Sanity
- Add more content types (projects, portfolio items)
- Customize the Studio interface
- Add more schema fields

Ready to switch your blog over to Sanity? 🚀
