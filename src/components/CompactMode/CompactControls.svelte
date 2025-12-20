<script>
  import { onMount } from "svelte";
  import { compact } from "../../stores/compact";

  let isCompact = true;

  function toggleCompact() {
    isCompact = !isCompact;
    compact.set(isCompact);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("compact", isCompact);
    }
  }

  onMount(() => {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem("compact");
      if (stored !== null) {
        isCompact = stored === "true";
      } else {
        isCompact = true; // Default
      }
      compact.set(isCompact);
    }
  });
</script>

<button
  on:click={toggleCompact}
  class="ml-2 px-3 py-1 rounded-md border border-transparent hover:border-white/50 hover:bg-white/10 text-[15px] font-bold text-white transition-all"
  aria-label="Toggle Compact Mode"
>
  {isCompact ? "Compact" : "Full"}
</button>
