<script>
  import { slide } from "svelte/transition";
  export let label;
  export let arr;
  export let warning;

  let container;

  const focusOnLast = () => {
    const divs = container.children;
    const inputToFocus = divs[divs.length - 2].querySelector("input");
    inputToFocus.focus();
  };

  const addInput = () => {
    arr = [...arr, null];
  };

  const removeInput = (i) => {
    if (arr.length > 1) {
      arr.splice(i, 1);
      arr = arr;
      focusOnLast();
    }
  };

  const handleKeydown = (e, i) => {
    if (e.key === "Enter") addInput();
    if (e.key === "Escape" && arr.length > 1) removeInput(i);
  };

  const addFocus = (input) => {
    if (arr.length > 1) input.focus();
  };
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  label {
    text-align: center;
    color: var(--light-grey);
  }
  input {
    text-align: center;
    margin: 0 1rem;
    width: 80%;
    background-color: inherit;
    color: var(--white);
    border-bottom: solid 0.125rem var(--dark-grey);
  }

  button {
    padding: 0;
    width: 2rem;
    height: 2rem;
    background-color: inherit;
    color: var(--green);
    border: none;
    font-size: 1.5rem;
  }

  .warning {
    color: var(--warning);
    border-bottom: solid 0.125rem var(--warning);
  }

  .remove {
    color: var(--warning);
  }
</style>

<label bind:this={container}>
  {label}
  {#each arr as value, i (i)}
    <div transition:slide>
      <button
        class="remove"
        type="button"
        tabindex="-1"
        on:click={() => removeInput(i)}
        disabled={arr.length < 2}>
        &minus;
      </button>
      <input
        type="number"
        class:warning
        bind:value={arr[i]}
        on:keydown={(e) => handleKeydown(e, i)}
        use:addFocus />
      <button type="button" tabindex="-1" on:click={addInput}>&#65291;</button>
    </div>
  {/each}
</label>
