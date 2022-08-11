<script lang="ts">
  import { pageMeta } from '$lib/stores/metadata'
  export let title: string
  export let description: string
  export let slug: string
  export let featuredImage: string
  export let url = `https://zackphilipps.dev/posts/${slug}`

  $pageMeta = { title, description, slug, featuredImage, url }
</script>

<svelte:head>
  <title>{title} | Zack Philipps</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <!-- Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={featuredImage ?? ''} />
  <meta property="og:url" content={url} />

  <!-- Twitter -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={featuredImage} />
</svelte:head>
