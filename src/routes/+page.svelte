<script lang="ts">
  import PersonForm from "$lib/components/PersonForm.svelte";
  import { personOneState, personTwoState } from "$lib/state.svelte";
</script>

<div class="grid gap-4 md:grid-cols-2">
  <PersonForm
    person={personOneState.value}
    clear={(): void => personOneState.reset()}
  />
  <PersonForm
    person={personTwoState.value}
    clear={(): void => personTwoState.reset()}
  />
</div>
