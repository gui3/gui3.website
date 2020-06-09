<script>
  import Examples from '../../components/_draft.svelte'
</script>

<style>
  @media (min-width: 480px) {
    h1 {
      -font-size: 4em;
    }
  }
</style>

<section id="presentation">
  <article id="intro" class="white textCenter">
    <h1>Hello people!</h1>

    <p>
      Vous êtes sur la page personnelle de
      Guillaume Silvent alias
      <a href="/about#me">gui3</a>,
      développeur et musicien amateur
    </p>
  </article>

  <article id="catchup" class="coloured green textCenter">
    <p class="big">
      Vous souhaitez publier votre
      <a href="/skills/websites">site web</a> ?
    </p>
    <p class="big">
      ou alors un
      <a href="/skills/programs">petit programme</a>
      vous simplifierai la vie ?
    </p>
    <p class="big">
      ou peut être êtes vous venus pour
      <a href="/hire">me recruter</a> !
    </p>
    <p class="big bigger">
      <a href="/contact">N'hésitez pas à me contacter !!</a>
    </p>
  </article>
</section>

<Examples/>
