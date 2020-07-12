<script lang="ts">
  export let value: string;
  export let label: string;
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
</style>

<label>
  {label}
  <div>
    <input type="text" maxlength={20} bind:value />
  </div>
</label>
