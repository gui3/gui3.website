<script context="module">
</script>

<script>
  //import Homescreen from '../components/layout/Homescreen.svelte'
  import Header from '../components/layout/Header.svelte'
  import Footer from '../components/layout/Footer.svelte'
  import Page from '../components/layout/Page.svelte'
  import {
    headerHeight,
    footerHeight,
    pageHeight,
    theme
  } from '../components/globalStore.js'

  import { onMount } from 'svelte'

  $: titleBonus = segment ? ' - ' + segment : ''

  export let segment
  let vh
  $: pageHeight.set(vh - $headerHeight)

</script>

<style>
  main {
    position: absolute;
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
</style>

<svelte:head>
  <title>gui3's{titleBonus}</title>
  <link
  id="theme"
  rel='stylesheet'
  href='css/themes/{$theme}.css'>
</svelte:head>

<svelte:window bind:innerHeight={vh}/>

<main
style="padding-bottom: {$footerHeight}px;">
  <Header {segment}/>

  <Page>
    <slot></slot>
  </Page>

  <Footer/>
</main>
