<script>
  import Toolbar from './Toolbar.svelte'
  import Nav from './Nav.svelte'

  export let segment
  import { headerHeight } from '../globalStore.js'
</script>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: inherit;
    width: 100%;

    box-shadow: 0 3px 5px #aac;
    box-shadow: 0 3px 5px rgba(100, 100, 200, 0.3);
  }
</style>

<header bind:clientHeight={$headerHeight}>
  <Toolbar/>
  <Nav {segment}/>
</header>
