<script>
  import Logo from '../components/Logo.svelte'
  import Toolbar from '../components/Toolbar.svelte'
  import Nav from '../components/Nav.svelte'

  export let segment

  let vh
  let y
  let h
  $: logoTransform = !segment ? Math.max(0, 1-3*y/vh) : 0

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

<svelte:window bind:scrollY={y} bind:innerHeight={vh}/>

<header bind:clientHeight={h}>
  <Logo {logoTransform}/>

  <div>
    <Toolbar {vh}/>
    <Nav {segment}/>
  </div>
</header>

<div style="height:{ y<h ? h+y : h+h}px">
</div>
