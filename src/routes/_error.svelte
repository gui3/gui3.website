<script>
  import Code from '../components/elements/Code.svelte'
  import Panel from '../components/Panel.svelte'
  import Article from '../components/Article.svelte'

  import { theme } from '../components/globalStore.js'

  export let status
  export let error

  // const dev = process.env.NODE_ENV === 'development';
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
  <link
  id="theme"
  rel='stylesheet'
  href='css/themes/{$theme}.css'/>
</svelte:head>

<section>
  <Article>
    <h1>⚡⚡ Error {status}</h1>

    <p>{error.message}</p>

    <p>
      <a href="mailto:gui.silvent@gmail.com">->Contacter le webmaster</a>
    </p>
  </Article>

  {#if error.stack} <!--dev $$ error.stack-->
    <Article>
      <h3>Error Stack :</h3>
      <Code block={true}>{error.stack}</Code>
    </Article>
  {/if}
</section>
