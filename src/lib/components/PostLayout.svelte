<script>
  import SEO from '$lib/components/SEO.svelte'

  export let title
  export let slug
  export let description
</script>

<SEO {title} {slug} {description} />
<slot />
