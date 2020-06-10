<script>
  export let image = null
  export let alt = null
</script>

<style>
  article img {
    -height: 100%;
    max-width: 50%;
    float: left;
  }
</style>

<article>
  {#if image}
    <img src={image} alt={alt}>
  {/if}
  <slot/>
</article>
