<script>
  import { onMount } from 'svelte'
  import { tttSetup } from './Tictactoe.js'

  onMount(() => {
    tttSetup()
  });
</script>

<style>
  #tictactoe {
    max-width: 300px
  }
  #tictactoeGrid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: auto;
  }
  #tictactoeGrid .tttRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  #tictactoeGrid button {
    display: inline-block;
    vertical-align: bottom;

    border: 0.01em solid #555;
    background: none;

    min-width: 2em;
    min-height: 2em;

    border-radius: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    box-shadow: 2px 2px 5px #222;

    color: #555;
    font-family: Comic, sans-serif;
    font-size: 1.5em;

    z-index: 2;
  }
  #tictactoeGrid button:active {
    box-shadow: none;
  }

  #tttMessages {
    white-space: pre-wrap;
    min-height: 4em;
  }
</style>

<div id="tictactoe">
  <h3>Un petit morpion ?</h3>

  <div id="tictactoeGrid">
    <div class="tttRow">
      <button id="ttt0.2">X</button>
      <button id="ttt1.2"></button>
      <button id="ttt2.2"></button>
    </div>
    <div class="tttRow">
      <button id="ttt0.1"></button>
      <button id="ttt1.1">O</button>
      <button id="ttt2.1"></button>
    </div>
    <div class="tttRow">
      <button id="ttt0.0"></button>
      <button id="ttt1.0"></button>
      <button id="ttt2.0">X</button>
    </div>
  </div>
  <p id="tttMessages">cliquez pour jouer !</p>
</div>
