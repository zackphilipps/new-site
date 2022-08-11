<script>
  import SEO from '$lib/components/SEO.svelte'

  export let title
  export let slug
  export let description
  export let featuredImage
  export let url = `https://zackphilipps.dev/posts/${slug}`
</script>

<SEO {title} {slug} {description} {featuredImage} {url} />
<slot />
