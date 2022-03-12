<script lang="ts">
  import { pageMeta } from '$lib/stores/metadata'
  export let title: string
  export let description: string
  export let slug: string
  $pageMeta = { title, description, slug }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
