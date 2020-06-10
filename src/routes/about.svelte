<script>
  import Panel from '../components/Panel.svelte'
  import Article from '../components/Article.svelte'
</script>

<Panel>
  <Article>
    <h1>About this site</h1>

    <p>This website uses these technologies :</p>
  </Article>

  <Article image={'images/logos/Svelte.png'} alt={'logo Svelte'}>
    <h2>Svelte + Sapper</h2>
    <p>
      bla bla bla
    </p>
  </Article>
</Panel>
