<script>
  export let label;
  export let arr;

  const handleClick = () => {
    arr = [...arr, null];
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      arr = [...arr, null];
    }

    if (e.key === "Escape" && arr.length > 1) {
      arr = arr.slice(0, -1);
    }
  };

  const init = (el) => el.focus();
</script>

<style>
  div {
    display: flex;
    justify-content: space-between;
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
</style>

<label>
  {label}
  {#each arr as value, i}
    <div>
      <input
        type="number"
        bind:value={arr[i]}
        on:keydown={handleKeydown}
        use:init />
      <button type="button" on:click={handleClick}>&#65291;</button>
    </div>
  {/each}
</label>
