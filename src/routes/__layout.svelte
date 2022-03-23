<script>
  import '$lib/assets/css/app.css'
  import ProfilePhoto from '$lib/assets/images/zack-philipps-profile-photo.jpg'
  import Footer from '$lib/components/Footer.svelte'
  import Prose from '$lib/components/Prose.svelte'
</script>

<div class="p-8">
  <header>
    <Prose class="md:py-8">
      <div class="not-prose">
        <img class="w-36 h-36 md:w-56 md:h-56 md:mx-auto rounded-full" src={ProfilePhoto} alt="Zack Philipps Avatar" />
      </div>
      <h2 class="md:text-center !mt-8 !mb-2 md:!mt-12 md:!mb-4">👋 I’m Zack.</h2>
      <p class="md:text-center text-blue-600">
        I’m a full-stack web developer from Indianapolis. I have been building websites, web apps, design systems,
        custom integrations, developer tools, and other cool things for about 10 years.
      </p>
      <nav class="not-prose">
        <ul class="md:flex justify-center items-center list-none">
          <li class="py-1 md:py-0 md:px-4">
            <a class="flex items-center" href="https://www.linkedin.com/in/zackphilipps/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              LinkedIn
            </a>
          </li>
          <li class="py-1 md:py-0 md:px-4">
            <a class="flex items-center" href="https://github.com/zackphilipps" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              GitHub
            </a>
          </li>
          <li class="py-1 md:py-0 md:px-4">
            <a class="flex items-center" href="mailto:hello@zackphilipps.dev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </Prose>
  </header>

  <main>
    <slot />
  </main>

  <Footer />
</div>
