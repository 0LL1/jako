<script lang="ts">
  import { reduced } from "$lib/calc";
  import type { PersonData } from "$lib/types";
  type Props = {
    personOne: PersonData;
    personTwo: PersonData;
  };

  let { personOne, personTwo }: Props = $props();

  let personOneTotal: number = $derived.by((): number =>
    reduced(personOne.total),
  );
  let personTwoTotal: number = $derived.by((): number =>
    reduced(personTwo.total),
  );
  let bothTotal: number = $derived.by(
    (): number => personOneTotal + personTwoTotal,
  );
</script>

<div class="text-xs text-gray-700 dark:text-gray-200">
  Total: {personOneTotal.toFixed(2)} + {personTwoTotal.toFixed(2)} = {bothTotal.toFixed(
    2,
  )}
</div>
