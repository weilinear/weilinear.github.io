<script>
  import { onMount } from "svelte";
  import { compact } from "../../stores/compact";

  let isCompact = true;

  function toggleCompact() {
    isCompact = !isCompact;
    compact.set(isCompact);
    document.documentElement.classList.toggle("compact", isCompact);
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
      document.documentElement.classList.toggle("compact", isCompact);
    }
  });
</script>

<button
  on:click={toggleCompact}
  class="density-control ml-2 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[13px] font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
  aria-label={`Reading density: ${isCompact ? "compact" : "roomy"}. Click to switch.`}
  aria-pressed={isCompact}
  title="Change reading density"
>
  <span class:active={isCompact} class="density-indicator" aria-hidden="true"
  ></span>
  {isCompact ? "Compact" : "Roomy"}
</button>

<style>
  .density-indicator {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 9999px;
    background: rgb(156 163 175);
    box-shadow: 0 0 0 2px rgb(255 255 255 / 0.08);
  }

  .density-indicator.active {
    background: rgb(74 222 128);
  }
</style>
