<script lang="ts">
  import { slide } from "svelte/transition";
  export let label: string;
  export let arr: (number | null)[];
  export let warning: string;

  let container: HTMLElement;

  const focusOnLast = (): void => {
    const divs = container.children;
    const inputToFocus = divs[divs.length - 2].querySelector("input");
    inputToFocus.focus();
  };

  const addInput = (): void => {
    arr = [...arr, null];
  };

  const removeInput = (i: number): void => {
    if (arr.length > 1) {
      arr.splice(i, 1);
      arr = arr;
      focusOnLast();
    }
  };

  const handleKeydown = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter") addInput();
    if (e.key === "Escape" && arr.length > 1) removeInput(i);
  };

  const addFocus = (input: HTMLElement): void => {
    if (arr.length > 1) input.focus();
  };
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    border: solid 0.125rem var(--dark-grey);
  }

  label {
    text-align: center;
    color: var(--light-grey);
  }
  input {
    text-align: center;
    margin: 0;
    width: 100%;
    background-color: inherit;
    color: var(--white);
  }

  button {
    margin: 0;
    padding: 0;
    width: 2rem;
    height: 2rem;
    background-color: inherit;
    color: var(--green);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  button:disabled {
    visibility: hidden;
  }

  .warning {
    color: var(--warning);
    border: solid 0.125rem var(--warning);
  }

  .remove {
    color: var(--warning);
  }
</style>

<label bind:this={container}>
  {label}
  {#each arr as _value, i (i)}
    <div transition:slide={{ duration: 200 }} class:warning>
      <button
        class="remove"
        type="button"
        tabindex={-1}
        on:click={() => removeInput(i)}
        disabled={arr.length < 2}>
        &minus;
      </button>
      <input
        type="number"
        bind:value={arr[i]}
        on:keydown={(e) => handleKeydown(e, i)}
        use:addFocus />
      <button type="button" tabindex={-1} on:click={addInput}>&#65291;</button>
    </div>
  {/each}
</label>
