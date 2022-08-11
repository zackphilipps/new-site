import { defineMDSveXConfig as defineConfig } from 'mdsvex'
// import { join } from 'path';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import toc from 'remark-toc'

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: './src/lib/components/PostLayout.svelte',

  // smartypants: {
  //   dashes: 'oldschool'
  // },

  remarkPlugins: [toc],
  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]]
})

export default config
