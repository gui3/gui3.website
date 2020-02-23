<script context="module">
</script>

<script>
  import Homescreen from '../components/Homescreen.svelte'
  import Header from '../components/Header.svelte'

  import { onMount } from 'svelte'

  $: titleBonus = segment ? ' - ' + segment : ''

  export let segment

  $: yPos = segment ? 100 : 0
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
