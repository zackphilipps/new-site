import { writable, type Writable } from 'svelte/store'

export type PageMeta = {
  title: string
  description: string
  slug: string
  date?: string
  featuredImage?: string
}
export const pageMeta: Writable<PageMeta> = writable({})
