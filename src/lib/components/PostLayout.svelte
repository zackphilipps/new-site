<script>
  import SEO from '$lib/components/SEO.svelte'

  export let title
  export let slug
  // export let date
  export let description
  export let featuredImage
</script>

<SEO {title} {slug} {description} {featuredImage} />
<slot />
