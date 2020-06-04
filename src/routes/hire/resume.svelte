<script>
  import GoogleDoc from '../../components/shared/GoogleDoc.svelte'

  let link = 'https://docs.google.com/document/d/e/' +
    '2PACX-1vTCENk1Vk86jehVi57cWkoIOJAJ8OxogcdUYnGZFn86d7X8YZTvPqCjcRuwNP5pH7ykKOG4pMcgKwwM' +
    '/pub?embedded=true'
</script>

<style>
</style>

<article>
  <h1>Curriculum Vitae</h1>
  <p>
    Voici mon CV mis à jour en direct depuis Google Docs.
  </p>
</article>

<GoogleDoc {link}>
</GoogleDoc>
