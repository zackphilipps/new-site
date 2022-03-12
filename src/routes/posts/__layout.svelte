<script>
  import '$lib/assets/css/prism.css'
  import ProfilePhoto from '$lib/assets/images/zack-philipps-profile-photo.jpg'
  import Prose from '$lib/components/Prose.svelte'
</script>

<header>
  <Prose class="prose-a:font-semibold prose-a:tracking-tighter border-b-blue-200 border-b-2">
    <a href="/" class="group not-prose block no-underline">
      <img
        class="w-56 h-56 mx-auto rounded-full group-hover:opacity-90"
        src={ProfilePhoto}
        alt="Zack Philipps Avatar"
      />
      <span class="flex justify-center mt-4 text-4xl">👋 I’m Zack.</span>
    </a>
    <p class="text-center text-blue-600">
      I'm a full-stack web developer from the Indianapolis area. I have been building websites, web apps, design
      systems, custom integrations, developer tools, and other cool things for about 10 years.
    </p>
  </Prose>
</header>

<main>
  <Prose>
    <slot />
  </Prose>
</main>
