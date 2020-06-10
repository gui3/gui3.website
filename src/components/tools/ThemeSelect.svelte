<script scope>
  import Tool from './Tool.svelte'
  import Loading from '../elements/Loading.svelte'

  import { theme } from '../globalStore.js'

  let themes = [
    'white',
    'dark'
  ]
</script>

<style>
</style>

<Tool icon={'🎨'}>
  {#if $theme && themes}
    <select name="theme" id="theme" bind:value={$theme}>
      {#each themes as t}
        <option value={t}>
          {t}
        </option>
      {/each}
    </select>
  {:else}
    <Loading/>
  {/if}
</Tool>
