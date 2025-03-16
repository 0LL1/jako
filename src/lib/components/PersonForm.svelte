<script lang="ts">
  import { calculateNetAmount } from "$lib/calc";
  import ItemInput from "$lib/components/ItemInput.svelte";
  import ItemsList from "$lib/components/ItemsList.svelte";
  import NameInput from "$lib/components/NameInput.svelte";
  import type { PersonData } from "$lib/types";

  type Props = {
    person: PersonData;
    clear: () => void;
  };

  let { person = $bindable(), clear }: Props = $props();

  let netAmount: number = $derived.by((): number => calculateNetAmount(person));
</script>

<form
  class="h-fit w-full rounded-lg p-4 shadow dark:border dark:border-gray-800 dark:shadow-none"
>
  {#if person?.name === ""}
    <NameInput label="Name" bind:name={person.name} autofocus />
  {:else}
    <fieldset class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <legend class="font-extrabold uppercase">{person.name}</legend>
        <div class="ml-auto flex">
          <button
            type="button"
            onclick={(): string => (person.name = "")}
            class="btn text-sm"
          >
            <span class="icon-[ph--pencil-simple-bold] size-4"></span>
            <span>Change name</span>
          </button>
          <button type="button" onclick={clear} class="btn text-sm">
            <span class="icon-[ph--x-bold] size-4"></span>
            <span>Clear</span>
          </button>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <ItemInput
            label="Total"
            onSubmit={(value: number): number => person.total.push(value)}
            autofocus
          />
          {#if netAmount < 0}
            <small class="text-danger dark:text-danger-light">
              Net amount is negative. Please adjust the total amount.
            </small>
          {/if}
        </div>
        <ItemsList type="total" bind:items={person.total} />
      </div>
      <div class="space-y-2">
        <div>
          <ItemInput
            label="For self"
            onSubmit={(value: number): number => person.forSelf.push(value)}
          />
        </div>
        <ItemsList type="forSelf" bind:items={person.forSelf} />
      </div>
      <div class="space-y-2">
        <div>
          <ItemInput
            label="For other"
            onSubmit={(value: number): number => person.forOther.push(value)}
          />
        </div>
        <ItemsList type="forOther" bind:items={person.forOther} />
      </div>
    </fieldset>
  {/if}
</form>
