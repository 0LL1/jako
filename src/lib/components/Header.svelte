<script lang="ts">
  import { GitHubLogo } from "$lib/components/Icons.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import "@fontsource-variable/outfit";
</script>

<header
  class="dark:shadow-none sticky top-0 z-10 flex items-center justify-between bg-light p-4 text-dark shadow dark:border-b dark:border-gray-800 dark:bg-dark dark:text-light"
>
  <h1 class="text-4xl font-extrabold">JAKO</h1>

  <div class="flex gap-4">
    <ThemeToggle />
    <a
      href="https://github.com/0LL1/jako"
      target="_blank"
      rel="noreferrer noopener"
      class="btn size-10 p-0"
      aria-label="GitHub repository"
    >
      <GitHubLogo class="size-8" />
    </a>
  </div>
</header>
