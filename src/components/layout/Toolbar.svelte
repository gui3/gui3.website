<script>
  import Logo from './Logo.svelte'
  //import LangSelect from '../tools/LangSelect.svelte'
  import ThemeSelect from '../tools/ThemeSelect.svelte'

</script>

<style>
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

    <!--LangSelect/-->
  </div>
  <div>
    <ThemeSelect/>
  </div>

  <!--div id="toolsSection" class="flexRow">
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
  </div-->
</nav>
