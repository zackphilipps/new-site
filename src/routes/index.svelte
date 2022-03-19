<script>
  import Prose from '$lib/components/Prose.svelte'

  import { compareDesc, format, parseISO } from 'date-fns'

  const getPath = (path, prefix = '') => {
    const regex = /([\/\w\-]+?)(\/index)?\.\w+/
    return prefix + path.match(regex)[1]
  }

  const globToArray = (glob) => {
    const array = Object.keys(glob).map((key) => {
      const path = getPath(key)
      const post = glob[key]
      return {
        key,
        path,
        ...post
      }
    })

    return array
  }

  const modules = import.meta.globEager('./posts/*.md')
  const posts = [...globToArray(modules)].sort((a, b) => {
    return compareDesc(parseISO(a.metadata.date), parseISO(b.metadata.date))
  })

  console.log(posts)
</script>

<svelte:head>
  <title>Indianapolis full-stack web developer | Zack Philipps</title>
</svelte:head>

<section id="writings" class="py-12 md:py-24 bg-teal-alt-800 -mx-8 -mb-8 px-8 text-teal-alt-100">
  <div class="container mx-auto max-w-3xl">
    <h2 class="text-2xl italic mb-3">Writings</h2>
    <div class="pl-6">
      {#each posts as post}
        <article class="py-2 border-b border-b-teal-alt-700 border-dotted last:border-b-0">
          <h3 class="md:flex justify-between text-xl">
            <a
              class="block ellipsis not-italic text-teal-alt-300 hover:no-underline hover:text-teal-alt-100 transition-colors"
              href={post.path}>{post.metadata.title}</a
            >
            <time class="block text-teal-alt-600 whitespace-nowrap md:ml-4" datetime={post.metadata.date}
              >{format(parseISO(post.metadata.date), 'MMM d, y')}</time
            >
          </h3>
        </article>
      {/each}
    </div>
  </div>
</section>
