<script>
  export let clickFunc
</script>

<style>
  button {
    background: inherit;
    font: inherit;
    
  }
</style>

<button on:click={clickFunc} class="aslink">
  <slot/>
</button>
