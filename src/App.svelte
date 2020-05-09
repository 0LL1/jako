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

  let result = "";

  $: oneName = one || "person 1";
  $: twoName = two || "person 2";

  $: difference = calculateDifference(
    oneTotal,
    oneToOne,
    oneToTwo,
    twoTotal,
    twoToTwo,
    twoToOne
  );

  $: if (difference > 0)
    result = `${twoName} pays €${difference.toFixed(2)} to ${oneName}`;
  else if (difference < 0)
    result = `${oneName} pays €${-difference.toFixed(2)} to ${twoName}`;
  else result = "you're even";
</script>

<style>
  main {
    margin: 0 auto;
    padding: 1rem;
    max-width: 16rem;
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
      <legend>{oneName} paid</legend>
      <Number label="total" bind:arr={oneTotal} />
      <Number label={`for ${oneName}`} bind:arr={oneToOne} />
      <Number label={`for ${twoName}`} bind:arr={oneToTwo} />
    </fieldset>

    <fieldset class="numbers">
      <legend>{twoName} paid</legend>
      <Number label="total" bind:arr={twoTotal} />
      <Number label={`for ${twoName}`} bind:arr={twoToTwo} />
      <Number label={`for ${oneName}`} bind:arr={twoToOne} />
    </fieldset>
  </form>

  <h2>{result}</h2>
</main>
