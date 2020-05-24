<script>
  import { fade, slide } from "svelte/transition";
  import { reduced, calculateDifference } from "./utils";
  import Number from "./Number.svelte";
  import Name from "./Name.svelte";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js");
  }

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
    result = `${twoName} pays ${difference.toFixed(2)} to ${oneName}`;
  else if (difference < 0)
    result = `${oneName} pays ${-difference.toFixed(2)} to ${twoName}`;
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
  header {
    margin: 0.5rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  img {
    height: 2rem;
  }

  main {
    margin: 2rem auto;
    max-width: 25rem;
  }

  form {
    margin: 0 auto;
    width: 100%;
  }

  fieldset {
    margin: 1rem 0;
    padding: 0.5rem;
    text-align: left;
    border: none;
  }

  legend {
    text-align: center;
    color: var(--light-grey);
  }

  p {
    text-align: center;
  }

  .warning {
    text-align: center;
    margin: 0 0 1rem 0;
    font-size: 0.75rem;
    color: var(--warning);
  }
</style>

<header transition:fade={{ duration: 1000 }}>
  <h1>jako</h1>
  <a
    href="https://github.com/0LL1/jako"
    target="_blank"
    rel="noreferrer noopener">
    <img src="./icons/GitHub.png" alt="link to GitHub" />
  </a>
</header>

<main transition:fade={{ duration: 1000 }}>
  <form>
    <fieldset>
      <legend>names:</legend>
      <Name label="person 1" bind:value={one} />
      <Name label="person 2" bind:value={two} />
    </fieldset>

    <fieldset class="numbers">
      <legend>{oneName} paid:</legend>
      <Number label="total" bind:arr={oneTotal} bind:warning={oneWarning} />

      {#if oneWarning}
        <p transition:slide={{ duration: 200 }} class="warning">{oneWarning}</p>
      {/if}

      <Number label={`for ${oneName}`} bind:arr={oneToOne} warning="" />
      <Number label={`for ${twoName}`} bind:arr={oneToTwo} warning="" />
    </fieldset>

    <fieldset class="numbers">
      <legend>{twoName} paid:</legend>
      <Number label="total" bind:arr={twoTotal} bind:warning={twoWarning} />

      {#if twoWarning}
        <p transition:slide={{ duration: 200 }} class="warning">{twoWarning}</p>
      {/if}

      <Number label={`for ${twoName}`} bind:arr={twoToTwo} warning="" />
      <Number label={`for ${oneName}`} bind:arr={twoToOne} warning="" />
    </fieldset>
  </form>

  <p>{result}</p>
</main>
