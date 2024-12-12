import { supabaseUploadFieldGenerator } from '@/utils/customFields/supabaseUpload'
import type { CollectionConfig } from 'payload'

// TODO: Add timestamptz updated_at value
export const Feed: CollectionConfig = {
  slug: 'feed',
  defaultSort: 'publication_date',
  admin: {
    useAsTitle: 'headline',
  },
  fields: [
    { name: 'headline', type: 'text' },
    { name: 'published', type: 'checkbox' },
    { name: 'abstract', type: 'textarea', required: false },
    // { name: 'image_url', type: 'text', required: false },
    supabaseUploadFieldGenerator({ name: 'image_url', required: false }),
    { name: 'video_url', type: 'text', required: false },
    // supabaseUploadFieldGenerator({ name: 'video_url', required: false }),
    { name: 'video_thumbnail', type: 'text', required: false },
    { name: 'publication_date', type: 'date', required: true },
    { name: 'slug', type: 'text', required: false },
  ],
  labels: {
    singular: 'Feed item',
    plural: 'Feed',
  }
}
