<script>
  let y
  let vh
  export let pageHeight
</script>

<style>

  img {
    margin: auto;
    width: 60%;
  }
  section {
    width: 100%;
    background: #fff;
  }

</style>

<svelte:window bind:scrollY={y} bind:innerHeight={vh}/>

<section  style="height:{ 100 }px;">

  <img src="./images/logos/3/3.svg" alt="site logo">

</section>
