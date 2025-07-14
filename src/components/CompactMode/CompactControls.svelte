<script>
  import { onMount } from "svelte";
  import { Toggle } from "flowbite-svelte";
  import { compact } from "../../stores/compact";

  let mounted = false;
  let isCompact = false;

  function onToggle(ev) {
    const { checked } = ev?.target;
    isCompact = checked;
    compact.set(isCompact);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("compact", isCompact);
    }
  }

  onMount(() => {
    mounted = true;
    if (typeof localStorage !== "undefined") {
      isCompact = localStorage.getItem("compact") === "true";
      compact.set(isCompact);
    }
  });
</script>

<div class="flex items-center">
  <span class="mr-4 text-lg text-white">Compact Mode</span>
  <Toggle bind:checked={isCompact} on:change={onToggle} />
</div>
