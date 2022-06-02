<svelte:options tag="wc-svelte" />
<script lang="ts">
  import { 
    onDestroy, 
    onMount 
  } from "svelte/internal";


  onMount(() => {});

  onDestroy(() => {});
</script>


<div class="wc-svelte">
  HI I AM SVELTE + VITE
</div>


<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
  }
  
  .wc-svelte {
    background: #000;
    color: #fff;
  }
</style>
