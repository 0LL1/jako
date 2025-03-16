<script lang="ts">
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
    <span class="icon-[ph--sun-bold] size-8"></span>
  {:else}
    <span class="icon-[ph--moon-bold] size-8"></span>
  {/if}
</button>
