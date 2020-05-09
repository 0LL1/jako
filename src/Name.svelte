<script>
  export let value;
  export let label;
</script>

<style>
  label {
    text-align: left;
    color: #aaa;
  }
  input {
    margin-top: 0.5rem;
    width: 100%;
    background-color: #222;
    color: #fff;
    border: none;
  }
</style>

<label>
  {label}
  <input type="text" maxlength="10" bind:value />
</label>
