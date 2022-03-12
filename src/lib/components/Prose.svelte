<script lang="ts">
  let className: string = ''

  export { className as class }
</script>

<div
  class={`mx-auto py-24 font-serif prose prose-teal md:prose-lg lg:prose-xl prose-headings:font-extrabold prose-img:rounded-md prose-img:mx-auto prose-img:mix-blend-multiply prose-img:opacity-90 prose-pre:!rounded-md ${className}`}
>
  <slot />
</div>
