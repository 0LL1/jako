<script lang="ts">
  import { Moon, Sun } from "$lib/components/Icons.svelte";
  import { themeState } from "$lib/state.svelte";

  function toggleTheme(): void {
    themeState.current = themeState.current === "light" ? "dark" : "light";

    if (themeState.current === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button
  type="button"
  onclick={toggleTheme}
  class="btn size-10 p-0"
  aria-label="Toggle theme"
>
  {#if themeState.current === "light"}
    <Sun class="size-8" />
  {:else}
    <Moon class="size-8" />
  {/if}
</button>
