<script>
  import { onMount } from "svelte";

  let isDark = false;

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("hyperDark"); // Also disable HyperDark if going to light mode
      localStorage.setItem("color-theme", "light");
      localStorage.setItem("hyperDark", "false");
    }
  }

  onMount(() => {
    // Default to Light unless specifically set to Dark in localStorage
    const storedTheme = localStorage.getItem("color-theme");
    isDark = storedTheme === "dark";
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<button
  on:click={toggleTheme}
  class="ml-2 px-3 py-1 rounded-md border border-transparent hover:border-white/50 hover:bg-white/10 text-[15px] font-bold text-white transition-all"
  aria-label="Toggle Dark Mode"
>
  {isDark ? "Dark" : "Light"}
</button>
