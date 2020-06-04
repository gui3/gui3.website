<script>
  import ButtonAsLink from './ButtonAsLink.svelte'
  export let link

  function printDoc () {
    window.frames["gDoc"].focus();
    window.frames['gDoc'].print();
  }
</script>

<style>
  .page {
    box-shadow: 4px 4px 5px #eb5;
    border: 1px solid #765;
    margin: 5%;
  }
  .gDocContainer {
    position: relative;
    width: 90%;
    -min-width: 800px;
    padding-top: 142%;
  }
  .gDoc {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>

<blockquote id="options">
  <p>
    cette page utilise un iframe,
    l'affichage peut ne pas être optimal :
  </p>
  <ul>
    <li>
      <a href={link}>
        voir le document en pleine page
      </a>
    </li>
    <li>
      <ButtonAsLink clickFunc={printDoc}>
        télécharger le document en PDF
      </ButtonAsLink>
    </li>
  </ul>
</blockquote>

<div class="gDocContainer page">
  <iframe
  id="gDoc"
  name="gDoc"
  class="gDoc"
  title="resume"
  src={link}>
  </iframe>
</div>
