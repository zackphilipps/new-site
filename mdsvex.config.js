import { defineMDSveXConfig as defineConfig } from 'mdsvex'
// import { join } from 'path';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: './src/lib/components/PostLayout.svelte'

  // smartypants: {
  //   dashes: 'oldschool'
  // },

  // remarkPlugins: [],
  // rehypePlugins: []
})

export default config
