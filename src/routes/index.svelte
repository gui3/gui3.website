<script>
  import Panel from '../components/elements/Panel.svelte'
  import Image from '../components/elements/Image.svelte'
  import Tictactoe from '../components/examples/Tictactoe.svelte'
</script>

<style>
  @media (min-width: 480px) {
    h1 {
      -font-size: 4em;
    }
  }
</style>

<Panel>
  <article id="intro" class="white textCenter">
    <h1>Hello people!</h1>

    <p>
      Vous êtes sur la page personnelle de
      Guillaume Silvent alias
      <a href="/about#me">gui3</a>,
      développeur et musicien amateur
    </p>
  </article>

  <article id="catchup" class="">
    <p class="red">
      Si vous êtes ici, c'est sûrement que vous avez eu accès à mon CV.
      Je me dois de m'excuser, le site n'est pas encore prêt...
      Pour le moment, il contient juste un <a href="/hire/resume">lien vers mon CV</a>.
    </p>
    <p>
      En attendant la suite, voici un petit jeu avec une IA écrite en javascript.
      Retrouvez en le code <a href="https://github.com/gui3/gui3.website/blob/master/src/components/examples/Tictactoe.js">ICI</a>.
    </p>
  </article>
  <Tictactoe/>
</Panel>
