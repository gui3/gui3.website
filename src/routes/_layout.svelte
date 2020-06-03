<script context="module">
</script>

<script>
  import Homescreen from '../components/layout/Homescreen.svelte'
  import Header from '../components/layout/Header.svelte'

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

<main>
  <Header {segment}/>

  <slot></slot>
</main>
