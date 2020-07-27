<script>
  export let src
  export let alt = "image sans description"
  export let credit = ""
</script>

<style>
  figure, img {
    max-width: 100%;
  }
</style>

<figure>
  <img src={src} alt={alt}>
  <figcaption>{credit}</figcaption>
</figure>
