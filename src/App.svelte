<script>
  import { slide } from "svelte/transition";
  import { reduced, calculateDifference } from "./utils";
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
  let oneWarning = "";
  let twoWarning = "";

  $: oneTotalReduced = reduced(oneTotal);
  $: oneToOneReduced = reduced(oneToOne);
  $: oneToTwoReduced = reduced(oneToTwo);

  $: twoTotalReduced = reduced(twoTotal);
  $: twoToTwoReduced = reduced(twoToTwo);
  $: twoToOneReduced = reduced(twoToOne);

  $: oneName = one || "person 1";
  $: twoName = two || "person 2";

  $: difference = calculateDifference({
    oneTotalReduced,
    oneToOneReduced,
    oneToTwoReduced,
    twoTotalReduced,
    twoToTwoReduced,
    twoToOneReduced,
  });

  $: if (difference > 0)
    result = `${twoName} pays €${difference.toFixed(2)} to ${oneName}`;
  else if (difference < 0)
    result = `${oneName} pays €${-difference.toFixed(2)} to ${twoName}`;
  else result = "you're even";

  $: oneWarning =
    oneTotalReduced < oneToOneReduced + oneToTwoReduced
      ? "total is too small"
      : "";
  $: twoWarning =
    twoTotalReduced < twoToTwoReduced + twoToOneReduced
      ? "total is too small"
      : "";
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

  .warning {
    margin: 0 0 1rem 0;
    text-align: left;
    font-size: 0.75rem;
    color: #ff4136;
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
      <Number label="total" bind:arr={oneTotal} bind:warning={oneWarning} />

      {#if oneWarning}
        <p transition:slide class="warning">{oneWarning}</p>
      {/if}

      <Number label={`for ${oneName}`} bind:arr={oneToOne} warning="" />
      <Number label={`for ${twoName}`} bind:arr={oneToTwo} warning="" />
    </fieldset>

    <fieldset class="numbers">
      <legend>{twoName} paid</legend>
      <Number label="total" bind:arr={twoTotal} bind:warning={twoWarning} />

      {#if twoWarning}
        <p transition:slide class="warning">{twoWarning}</p>
      {/if}

      <Number label={`for ${twoName}`} bind:arr={twoToTwo} warning="" />
      <Number label={`for ${oneName}`} bind:arr={twoToOne} warning="" />
    </fieldset>
  </form>

  <h2>{result}</h2>
</main>
