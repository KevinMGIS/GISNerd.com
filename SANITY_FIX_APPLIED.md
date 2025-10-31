# Sanity + Vite Fix Applied

## Problem Fixed

The error `Uncaught ReferenceError: process is not defined` has been resolved.

### What Was Wrong

Sanity Studio expects Node.js environment variables (`process.env`) which aren't available in browser environments like Vite builds.

### Solution Applied

Updated `vite.config.ts` to:
1. Define `process.env` as an empty object for browser compatibility
2. Suppress Sanity-related build warnings

### Changes Made

**File: `vite.config.ts`**
```typescript
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},  // ← Fix for Sanity
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      },
    },
  },
})
```

## ✅ Next Steps

1. **Visit the Studio**: http://localhost:5174/admin (note: port changed to 5174)
2. **Test it works**: The `process is not defined` error should be gone
3. **Create a post**: Try creating your first blog post in Sanity

## 🔧 If You Still See Errors

If you see any other errors, let me know! Common issues:
- Browser cache: Hard refresh (Cmd+Shift+R)
- Old dev server: Make sure only one server is running

---

The Sanity Studio should now load without errors at `/admin`! 🎉
