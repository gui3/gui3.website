<script>
  import Codeblock from '../components/shared/Codeblock.svelte'

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>gui3's - {status}</title>
</svelte:head>

<section>
  <article>
    <h1>Ooops ... {status}</h1>

    <p>{error.message}</p>

    <p>
      <a href="mailto:gui.silvent@gmail.com">->Contacter le webmaster</a>
    </p>

    <Codeblock>{error.message}</Codeblock>

  </article>
  {#if error.stack} <!--dev $$ error.stack-->
    <article>
      <h3>Error Stack :</h3>
      <Codeblock>{error.stack}</Codeblock>
    </article>
  {/if}
</section>
