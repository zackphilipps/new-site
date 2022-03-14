<script>
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

<ul>
  {#each posts as post}
    <li>
      <a href={post.path}>{post.metadata.title} | {format(parseISO(post.metadata.date), 'MMM d, y')}</a>
    </li>
  {/each}
</ul>
