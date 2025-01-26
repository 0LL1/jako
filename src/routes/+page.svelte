<script lang="ts">
  import PersonForm from "$lib/components/PersonForm.svelte";
  import { personOneState, personTwoState } from "$lib/state.svelte";
</script>

<div class="grid gap-4 md:grid-cols-2">
  <PersonForm
    person={personOneState.current}
    clear={(): void => personOneState.reset()}
  />
  <PersonForm
    person={personTwoState.current}
    clear={(): void => personTwoState.reset()}
  />
</div>
