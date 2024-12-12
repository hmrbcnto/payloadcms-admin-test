import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'feed',
  },
  fields: [
    { name: 'payload', type: 'richText', required: true },
    { name: 'feed', type: 'relationship', required: true, relationTo: 'feed' },
    { name: 'type', type: 'text', required: false, defaultValue: null },
  ],
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  timestamps: false
}
