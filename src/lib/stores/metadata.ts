import { writable, type Writable } from 'svelte/store'

export type PageMeta = {
  title: string
  description: string
  slug: string
  featuredImage?: string
  url: string
}
export const pageMeta: Writable<PageMeta> = writable({})
