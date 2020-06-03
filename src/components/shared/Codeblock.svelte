<script>
  import Code from './Code.svelte'
</script>

<svelte:head>
</svelte:head>

<style>
  .code {
    margin: 1em 0.5em;
    overflow: auto;
  }
</style>

<pre class="code">
  <Code>
    <slot/>
  </Code>
</pre>
