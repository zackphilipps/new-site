<script lang="ts">
  import { page } from '$app/stores'
  import { pageMeta } from '$lib/stores/metadata'
  export let title: string
  export let description: string
  export let slug: string
  export let featuredImage: string
  let origin = $page.url.origin
  let url = 'https://zackphilipps.dev' + $page.url.pathname

  $pageMeta = { title, description, slug, featuredImage }
</script>

<svelte:head>
  <title>{title} | Zack Philipps</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <!-- Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if featuredImage}
    <meta property="og:image" content={origin + featuredImage} />
  {/if}
  <meta property="og:url" content={url} />

  <!-- Twitter -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if featuredImage}
    <meta name="twitter:image" content={origin + featuredImage} />
  {/if}
</svelte:head>
