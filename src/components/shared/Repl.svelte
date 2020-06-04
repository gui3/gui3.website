<script>
  import Code from './Code.svelte'

  import { onMount } from 'svelte';

  let panels

  onMount(()=> {
    import('split.js')
    .then(module => {
      const split = module.default
      panels = split(
        ['.panel.left','.panel.right'],
        {
          minSize: [100, 100],
        }
      )
    })
  })


</script>

<style>
  .container {
    display: flex;
  }
  :global(.gutter) {
    border-left: 1px solid #777;
    border-right: 1px solid #777;
    cursor: col-resize;
    width: 4px !important;
  }
  .panel {
    position: relative;
    padding: 0 1.2em;
  }
  .panel h3 {
    position: absolute;
    top: 0;
    right: 0;
    background: #f05;
    color: #fff;
    border-left: 1px solid #223;
    border-bottom: 1px solid #223;

  }
</style>

<div class="repl container">

  <div class="repl panel left input">
    <h3>Input</h3>
    <Code editable={true} height="100%"><slot/></Code>
  </div>

  <div class="repl panel right">
    <h3>Output</h3>
    <Code height="100%">...waiting for input</Code>
  </div>

</div>
