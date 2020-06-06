<script>
  import ButtonAsLink from './ButtonAsLink.svelte'

  export let link

  function printDoc () {
    fetch(link, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    })
    .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.text()
      .then(function(data) {
        console.log(data)
        var printWindow = window.open('', '', 'height=400,width=800')
        printWindow.document.write('<html><head><title>Print</title>')
        printWindow.document.write('</head><body >')
        printWindow.document.write(data)
        printWindow.document.write('</body></html>')
        printWindow.document.close()
        printWindow.print()
      })
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    })
  }
</script>

<style>
  .page {
    box-shadow: 4px 4px 5px #eb5;
    border: 1px solid #765;
    margin: 5%;
    max-width: 1000px;
    min-width: 800px;
  }
  .gDocContainer {
    position: relative;
    width: 90%;
    -min-width: 800px;
    padding-top: 142%;
  }
  .gDoc {
    overflow: visible;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>

<article id="options">
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
</article>

<div class="gDocContainer page">
  <iframe
  id="gDoc"
  name="gDoc"
  class="gDoc"
  title="resume"
  src={link}>
  </iframe>
</div>
