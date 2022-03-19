<script lang="ts">
  import classNames from 'classnames'

  let className: string = ''

  export { className as class }
</script>

<div
  class={classNames([
    ...'mx-auto py-12 md:py-24 font-serif prose prose-teal md:prose-lg lg:prose-xl prose-headings:font-extrabold prose-img:rounded-md prose-img:mx-auto prose-img:mix-blend-multiply prose-img:opacity-90 prose-pre:mix-blend-multiply prose-pre:opacity-95'.split(
      ' '
    ),
    className
  ])}
>
  <slot />
</div>
