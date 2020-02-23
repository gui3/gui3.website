<script context="module">
</script>

<script>
  import Header from '../components/Header.svelte'
  import Nav from '../components/Nav.svelte'

  import { onMount } from 'svelte'

  $: titleBonus = segment ? ' - ' + segment : ''

  export let segment
</script>

<style>
  main {
    position: relative;
    background-color: white;
    margin: 0;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title>
    gui3's{titleBonus}
  </title>
</svelte:head>

<Header/>
<Nav {segment}/>

<main>
  <slot></slot>
</main>
