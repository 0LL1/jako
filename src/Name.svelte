<script>
  export let value;
  export let label;
</script>

<style>
  label {
    text-align: center;
    color: var(--light-grey);
  }
  input {
    text-align: center;
    margin-top: 0.5rem;
    width: 100%;
    background-color: inherit;
    color: var(--white);
    border: none;
    border-bottom: solid 0.125rem var(--dark-grey);
  }
</style>

<label>
  {label}
  <input type="text" maxlength="10" bind:value />
</label>
