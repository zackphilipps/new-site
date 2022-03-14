<script>
  import '$lib/assets/css/app.css'
  import '$lib/assets/css/prism.css'
  import ProfilePhoto from '$lib/assets/images/zack-philipps-profile-photo.jpg'
  import Prose from '$lib/components/Prose.svelte'
</script>

<div class="p-8">
  <header class="border-b border-b-teal-200 pt-3 pb-2 px-4 -mt-8 -mx-8 sticky top-0 bg-teal-alt-60 z-50">
    <p>
      <a href="/" class="group inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 group-hover:-translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <img class="w-8 h-8 rounded-full mr-2 group-hover:opacity-90" src={ProfilePhoto} alt="Zack Philipps Avatar" />
        <span><strong>Zack Philipps</strong> // Full-stack web developer</span>
      </a>
    </p>
  </header>

  <main>
    <article>
      <Prose>
        <slot />
      </Prose>
    </article>
  </main>
</div>
