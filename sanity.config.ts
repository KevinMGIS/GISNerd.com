import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'GIS Nerd Blog',

  projectId: 'yoep6909',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(), // Allows you to test GROQ queries
  ],

  schema: {
    types: schemaTypes,
  },

  // Optional: Configure the Studio
  basePath: '/admin',
})
