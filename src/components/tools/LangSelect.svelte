<script>
  import Tool from './Tool.svelte'
  import Loading from '../elements/Loading.svelte'
  import { lang } from '../i18n/langStore.js'
  import { langs } from '../i18n/i18n.js'

</script>

<style>
</style>

<Tool icon={'🎌'}>
  {#if $lang && $langs}
    <select name="" id="">
      {#each $langs as locale}
        <option>
          {locale.emoji}
        </option>
      {/each}
    </select>
  {:else}
    <Loading/>
  {/if}
</Tool>
