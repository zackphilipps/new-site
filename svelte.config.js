import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import toc from 'remark-toc'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      ...mdsvexConfig,
      remarkPlugins: [toc],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]]
    })
  ],

  kit: {
    adapter: adapter()
  }
}

export default config
