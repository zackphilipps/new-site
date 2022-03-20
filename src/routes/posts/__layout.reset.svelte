<script>
  import '$lib/assets/css/app.css'
  import '$lib/assets/css/prism.css'
  import ProfilePhoto from '$lib/assets/images/zack-philipps-profile-photo.jpg'
  import Footer from '$lib/components/Footer.svelte'
  import Prose from '$lib/components/Prose.svelte'
</script>

<div class="p-8">
  <header class="border-b border-b-teal-200 bg-teal-alt-100 pt-2 pb-1 px-2 -mt-8 -mx-8 sticky top-0 z-50">
    <p class="text-sm">
      <a href="/" class="group flex items-center">
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
        <img
          class="w-8 h-8 rounded-full mr-2 opacity-90 group-hover:opacity-100"
          src={ProfilePhoto}
          alt="Zack Philipps Avatar"
        />
        <span class="flex-auto ellipsis"><strong>Zack Philipps</strong> // Full-stack web developer</span>
      </a>
    </p>
  </header>

  <main>
    <article>
      <Prose>
        <slot />
        <hr />
        <a href="/#writings" class="group inline-flex items-center">
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
          Back to home page
        </a>
      </Prose>
    </article>
  </main>

  <Footer />
</div>
