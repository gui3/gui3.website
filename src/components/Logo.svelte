<script>
  export let logoTransform = 0
  let vh
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<svelte:window bind:innerHeight={vh}/>

<!--button
class="logo"
type="button"
name="button"
title="MENU"
onclick="toggleSidebar();">
  <img
  class="logo"
  src="images/Escher's_Relativity.jpg"
  alt="Escher's relativity">
</button -->
<img
class=""
src="images/logos/3/3.svg"
alt="logo"
style="height:{vh*logoTransform}px">
