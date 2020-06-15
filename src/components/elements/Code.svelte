<script>
  export let block = true;
  export let editable = false;
  export let height = ''
  export const theme = '';
  export const language = '';

  let style

  // block/inline style -------------
  if (block) {
    style = `
      padding: 0.3em 0.5em;
      margin: 0;
    `
  } else {
    style = `
      display: inline;
    `
  }

  if (height) {
    style += 'height: '+height+';'
  }
</script>

<svelte:head>
</svelte:head>

<style>
  .code {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1em - 2px);
    color: #f05;
    background-color: #eee;
    border: 1px solid #223;
    border-radius: 2px;
    overflow: auto;
  }
</style>

<pre class="code" {style} contenteditable={editable}>
  <code>
    <slot/>
  </code>
</pre>
