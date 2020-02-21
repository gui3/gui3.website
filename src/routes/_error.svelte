<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  h1, p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>gui3 - {status}</title>
</svelte:head>

<h1>Ooops ... {status}</h1>

<p>{error.message}</p>

{#if error.stack} <!--dev $$ error.stack-->
  <h3>Error Stack :</h3>
  <pre class="code"><code>{error.stack}<code></pre>
{/if}
