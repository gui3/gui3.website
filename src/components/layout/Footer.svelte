<script>
  import { footerHeight } from '../globalStore.js'
</script>

<style>
  footer {
    scroll-snap-align: end;
    scroll-snap-stop: always;

    bottom: 0;
    position: absolute;
    width: 100%;

    /*background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 0.6em,
      rgba(150,150,150,0.2) 0.2em,
      rgba(150,150,150,0.2) 0.8em);*/
    background: linear-gradient(
      180deg,
      transparent,
      #999);

    color: #111;
    font-size: 0.8em;
    padding: 0.5em 1em;

    display: flex;
  }
  footer * {
    flex: 1;
  }
  footer ul li {
    -display: inline;
    list-style: none;
    margin: 0 1em;
  }
</style>

<footer bind:clientHeight={$footerHeight}>
  <ul>
    <li>
      
    </li>
  </ul>

  <ul>
    <li>
      Site réalisé grâce à :
    </li>
    <li>
      <a href="https://svelte.com">
        <img
        src="images/logos/Svelte.png"
        alt="logo Svelte"
        style="height: 4em;"/>
      </a>
      <a href="https://heroku.com">
        <img
        src="images/logos/Heroku.png"
        alt="logo Heroku"
        style="height: 4em;"/>
      </a>
      <a href="https://github.com">
        <img
        src="images/logos/Github.png"
        alt="logo Github"
        style="height: 4em;"/>
      </a>
      <a href="https://nodejs.com">
        <img
        src="images/logos/Node.png"
        alt="logo Node"
        style="height: 4em;"/>
      </a>
    </li>
  </ul>
</footer>
