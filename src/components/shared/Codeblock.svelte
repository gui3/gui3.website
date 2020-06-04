<script>
  import Code from './Code.svelte'
</script>

<svelte:head>
</svelte:head>

<style>
  .code {
    margin: 1em 0.5em;
    overflow: auto;
    background-color: #eee;
    border: 1px solid #223;
    padding: 0.2em 0.4em;
    border-radius: 2px;
  }
</style>

<pre class="code">
  <Code>
    <slot/>
  </Code>
</pre>
