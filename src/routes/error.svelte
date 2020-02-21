<script>
  import { onMount } from 'svelte'


  onMount(async function() {
    const res = await fetch("/api/error", {
      method: 'post'
    })
  })
</script>

<h1> this page should throw an error</h1>
