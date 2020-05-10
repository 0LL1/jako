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

  const handleClick = () => {
    arr = [...arr, null];
  };

  const handleKeydown = (e, i) => {
    console.log("handleKeydown -> value", i);
    if (e.key === "Enter") {
      arr = [...arr, null];
    }

    if (e.key === "Escape" && arr.length > 1) {
      arr.splice(i, 1);
      arr = arr;
      focusOnLast();
    }
  };

  const addFocus = (el) => {
    if (arr.length > 1) el.focus();
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
    color: #aaa;
  }
  input {
    margin-right: 1rem;
    width: 80%;
    background-color: #222;
    color: #fff;
    border: none;
  }

  button {
    padding: 0;
    width: 2rem;
    height: 2rem;
    background-color: inherit;
    color: #2ecc40;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
  }

  .warning {
    color: #ff4136;
    border: #ff4136 solid 1px;
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
      <button type="button" tabindex="-1" on:click={handleClick}>
        &#65291;
      </button>
    </div>
  {/each}
</label>
