<script>
  export let value;
  export let label;
</script>

<style>
  label {
    color: var(--light-grey);
  }
  input {
    text-align: center;
    margin-top: 0.5rem;
    width: 100%;
    background-color: var(--dark-grey);
    color: var(--white);
    border: none;
  }
</style>

<label>
  {label}
  <input type="text" maxlength="10" bind:value />
</label>
