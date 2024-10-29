<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type Props = {
    label: string;
    onSubmit: (value: number) => void;
    initialValue?: number;
  } & HTMLInputAttributes;

  let { label, onSubmit, initialValue, ...restProps }: Props = $props();
  let value: number | undefined = $state(initialValue);
  let invalid: boolean = $state(false);
</script>

<label class="flex flex-col gap-1">
  {label}
  <input
    type="number"
    min="0"
    class="input"
    aria-invalid={invalid ? "true" : undefined}
    bind:value
    onkeydown={(e): void => {
      invalid = false;

      if (e.key === "Enter") {
        if (value && value >= 0) {
          e.preventDefault();
          onSubmit(value);
          value = undefined;
        } else {
          invalid = true;
        }
      }
    }}
    {...restProps}
  />
</label>
{#if invalid}
  <small class="text-danger dark:text-danger-light"
    >Please enter a positive number.</small
  >
{/if}
