<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type Props = {
    label: string;
    name: string;
  } & HTMLInputAttributes;

  let { label, name = $bindable(), ...restProps }: Props = $props();
  let value: string | undefined = $state("");
  let invalid: boolean = $state(false);
</script>

<label class="flex flex-col gap-1">
  {label}
  <input
    type="text"
    class="input"
    aria-invalid={invalid ? "true" : undefined}
    maxlength="15"
    bind:value
    onkeydown={(e): void => {
      invalid = false;

      if (e.key === "Enter") {
        if (value) {
          name = value;
          value = "";
        } else {
          invalid = true;
        }
      }
    }}
    {...restProps}
  />
</label>
