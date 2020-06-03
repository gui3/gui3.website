<script>
  import Toolbar from './Toolbar.svelte'
  import Nav from './Nav.svelte'

  export let segment

  let h
</script>

<style>
  header {
    position: fixed;
    z-index: 100;
    background: #fff;
    width: 100%;

    box-shadow: 0 3px 5px #aac;
    box-shadow: 0 3px 5px rgba(100, 100, 200, 0.3);
  }
</style>

<header bind:clientHeight={h}>
  <Toolbar/>
  <Nav {segment}/>
</header>

<div style="height:{h}px">
</div>
