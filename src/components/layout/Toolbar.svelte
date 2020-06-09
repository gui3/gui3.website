<script>
  import Logo from './Logo.svelte'
  import Loading from '../elements/Loading.svelte'

  let locales
  setTimeout(_=>{
    locales = [
      {
        name: 'fr',
        emoji: '🇫🇷'
      },
      {
        name: 'en',
        emoji: '🇬🇧'
      }
    ]
  }, 5000)
</script>

<style>
  img.logo {
    width: 2.5em;
    height: 2.5em;
    -border-radius: 100%;
    margin: 0.2em 0.5em;
  }

  a.logo {
    border-bottom: none;
  }

  .flexRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>

<nav class="flexRow">
  <div id="brand" class="flexRow">
    <Logo/>
    <h3>
      <a href="/#top">
        gui3's website
      </a>
    </h3>
    {#if locales}
      <select name="" id="">
        {#each locales as locale}
          <option>
            {locale.emoji}
          </option>
        {/each}
      </select>
    {:else}
      <Loading/>
    {/if}
  </div>

  <div id="toolsSection" class="flexRow">
    <a
    class="github-button logo"
    href="https://github.com/gui3"
    title="GitHub"
    aria-label="GitHub">
      <img
      class="logo"
      src="./images/logos/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
      alt="github logo">
    </a>

    <a
    class="facebook-button logo"
    href="https://www.facebook.com/guillaume.silvent"
    title="Facebook"
    aria-label="Facebook">
      <img
      class="logo"
      src="./images/logos/Facebook_logo.svg"
      alt="github logo">
    </a>
  </div>
</nav>
