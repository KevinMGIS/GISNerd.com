# Blog Post Migration to Sanity

You have **3 options** for migrating your existing 7 blog posts into Sanity:

## Option 1: Automated Migration (Recommended - Quickest)

This creates all posts in Sanity with metadata, then you add full content via Studio.

### Steps:

1. **Get a Sanity auth token:**
   ```bash
   npx sanity manage
   ```
   - Go to **API** → **Tokens**
   - Create a new token with **Editor** permissions
   - Copy the token

2. **Set the token as environment variable:**
   ```bash
   export SANITY_AUTH_TOKEN="your-token-here"
   ```

3. **Install tsx (if not already installed):**
   ```bash
   npm install -g tsx
   ```

4. **Run the migration script:**
   ```bash
   tsx scripts/migrate-blog-posts.ts
   ```

5. **Edit content in Studio:**
   - Visit http://localhost:5174/admin
   - Open each post
   - Copy/paste content from your TSX files
   - Format with rich text editor

**Pros:** Fast for metadata, visual editing in Studio
**Cons:** Need to copy content manually

---

## Option 2: Manual Entry (Most Control)

Enter everything directly in Sanity Studio.

### Steps:

1. Fix CORS (if you haven't already):
   - Go to https://www.sanity.io/manage/personal/project/yoep6909
   - Add `http://localhost:5173` and `http://localhost:5174` to CORS origins

2. Visit http://localhost:5174/admin

3. Click **"Create"** → **"Post"**

4. For each of your 7 posts:
   - Fill in: title, slug, excerpt, date, tags, featured, read time
   - Copy content from TSX files
   - Format with rich text editor
   - Publish

**Pros:** Full control, use Sanity's rich text editor
**Cons:** Most time-consuming (7 posts × ~5 min = 35 min)

---

## Option 3: Enhanced Script (Most Automated)

I can create a more sophisticated script that parses your TSX files and converts the content automatically.

### What it would do:
- Parse JSX structure from your blog post files
- Convert headings, paragraphs, lists to Portable Text
- Preserve formatting and structure
- Create complete posts in Sanity

**Pros:** Fully automated, preserves structure
**Cons:** Requires more complex parsing, may need tweaks

---

## My Recommendation

**Start with Option 1:**
1. Run the migration script (5 minutes)
2. This creates all 7 posts with metadata
3. Then spend 20-30 minutes editing content in Studio
4. You get familiar with Sanity's editor in the process

This is faster than pure manual entry and lets you see how Sanity works!

---

## Your Current Blog Posts to Migrate:

1. ✅ **Layoff to Liftoff** (2024-07-15) - 5 min read
2. ✅ **Hey! It's me, the GIS Nerd** (2025-03-27) - 3 min read
3. ✅ **GIS Unmapped** (2024-08-10) - 6 min read
4. ✅ **Built Just to Build** (2024-09-01) - 4 min read
5. ✅ **Trips** (2025-10-14) - 4 min read
6. ✅ **Why I Built The Grid** (2025-10-14) - 6 min read
7. ✅ **Building SiteIQ** (2025-10-23) - 4 min read

**Total:** 32 minutes of reading time to migrate

---

## After Migration

Once posts are in Sanity, you'll need to:
1. Update your blog section to fetch from Sanity
2. Create a Portable Text renderer component
3. Test the new blog display

I can help with all of these steps once you choose your migration approach!

---

## Need Help?

Let me know which option you prefer, or if you want me to create the enhanced parser (Option 3)!
