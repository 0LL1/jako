<script>
  import { calculateDifference } from "./utils";
  import Number from "./Number.svelte";
  import Name from "./Name.svelte";

  let one = "";
  let two = "";

  let oneTotal = [null];
  let oneToOne = [null];
  let oneToTwo = [null];

  let twoTotal = [null];
  let twoToTwo = [null];
  let twoToOne = [null];

  $: difference = calculateDifference(
    oneTotal,
    oneToOne,
    oneToTwo,
    twoTotal,
    twoToTwo,
    twoToOne
  );
</script>

<style>
  main {
    margin: 0 auto;
    padding: 1rem;
  }

  form {
    margin: 0 auto;
    width: 14rem;
  }

  fieldset {
    margin: 1rem 0;
    padding: 1rem;
    border: solid 0.125rem #222;
    text-align: center;
  }

  legend {
    color: #aaa;
  }

  h1,
  h2 {
    text-align: center;
  }
</style>

<main>
  <h1>JAKO</h1>

  <form>
    <fieldset>
      <legend>names</legend>
      <Name label="person 1" bind:value={one} />
      <Name label="person 2" bind:value={two} />
    </fieldset>

    <fieldset class="numbers">
      <legend>{one || 'person 1'} paid</legend>
      <Number label="total" bind:arr={oneTotal} />
      <Number label={`for ${one || 'person 1'}`} bind:arr={oneToOne} />
      <Number label={`for ${two || 'person 2'}`} bind:arr={oneToTwo} />
    </fieldset>

    <fieldset class="numbers">
      <legend>{two || 'person 2'} paid</legend>
      <Number label="total" bind:arr={twoTotal} />
      <Number label={`for ${two || 'person 2'}`} bind:arr={twoToTwo} />
      <Number label={`for ${one || 'person 1'}`} bind:arr={twoToOne} />
    </fieldset>
  </form>

  <h2>{difference}</h2>
</main>
