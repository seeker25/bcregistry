import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/**/*.md'
      },
      schema: z.object({
        content_type: z.string().optional(),
        background_image: z.string().optional()
      })
    }),
    home_frCA: defineCollection({
      type: 'page',
      source: {
        include: 'fr-CA/home/**/*.md'
      },
      schema: z.object({
        content_type: z.string().optional(),
        background_image: z.string().optional()
      })
    }),
    home_product_cards_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/sections/**/cards/**/*.md',
        exclude: ['**/bc-assessment.md'] // remove bc assessment card for now
      },
      schema: z.object({
        background_image: z.string().optional(),
        name: z.string(),
        badge: z.string(),
        link: z.object({
          label: z.string(),
          target: z.string(),
          href: z.string(),
          rtcKey: z.string(),
          appendAccountId: z.boolean(),
          locale: z.boolean()
        })
      })
    }),
    home_product_cards_frCA: defineCollection({
      type: 'page',
      source: {
        include: 'fr-CA/home/sections/**/cards/**/*.md',
        exclude: ['**/bc-assessment.md'] // remove bc assessment card for now
      },
      schema: z.object({
        background_image: z.string().optional(),
        name: z.string(),
        badge: z.string(),
        link: z.object({
          label: z.string(),
          target: z.string(),
          href: z.string(),
          rtcKey: z.string(),
          appendAccountId: z.boolean(),
          locale: z.boolean()
        })
      })
    }),
    ppr_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/ppr/**/*.md'
      },
      schema: z.object({
        content_type: z.string().optional(),
        background_image: z.string().optional()
      })
    }),
    ppr_frCA: defineCollection({
      type: 'page',
      source: {
        include: 'fr-CA/ppr/**/*.md'
      },
      schema: z.object({
        content_type: z.string().optional(),
        background_image: z.string().optional()
      })
    })
  }
})
