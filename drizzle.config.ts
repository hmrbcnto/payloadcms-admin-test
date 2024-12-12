import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schemaFilter: ['public'],
  verbose: true,
  dbCredentials: {
    url: process.env.POSTGRES_URI || ''
  },
  out: './drizzle',
  tablesFilter: [
    'sheets'
  ]
});
