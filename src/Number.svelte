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
    text-align: left;
    color: var(--light-grey);
  }
  input {
    margin-right: 1rem;
    width: 80%;
    background-color: var(--dark-grey);
    color: var(--white);
    border: none;
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
    border: var(--warning) solid 1px;
  }

  .remove {
    padding-top: 2px;
    color: var(--warning);
  }
</style>

<label bind:this={container}>
  {label}
  {#each arr as value, i (i)}
    <div transition:slide>
      <input
        type="number"
        class:warning
        bind:value={arr[i]}
        on:keydown={(e) => handleKeydown(e, i)}
        use:addFocus />
      <button type="button" tabindex="-1" on:click={addInput}>&#65291;</button>
      <button
        class="remove"
        type="button"
        tabindex="-1"
        on:click={() => removeInput(i)}
        disabled={arr.length < 2}>
        &minus;
      </button>
    </div>
  {/each}
</label>
