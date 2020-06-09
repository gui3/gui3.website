<script>
  import { pageHeight, headerHeight } from './globalStore.js'
</script>

<style>
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;

    min-height: 100vh;
    padding: 2em;

    border: 1px solid blue;
  }
</style>

<section style="min-height: {$pageHeight}px; scroll-margin: {$headerHeight}px">
  <slot/>
</section>
