<script>
  import Code from './Code.svelte'
</script>

<svelte:head>
</svelte:head>

<style>
  .code {
    display: inline;
    background-color: #eee;
    border: 1px solid #223;
    -padding: 0.2em 0.4em;
    border-radius: 2px;
  }
</style>

<span class="code">
  <code>
    <slot/>
  <code>
</span>
