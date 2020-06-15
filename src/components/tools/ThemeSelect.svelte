<script scope>
  import Tool from './Tool.svelte'
  import Loading from '../elements/Loading.svelte'

  import { theme } from '../globalStore.js'

  const themes = [{
      name: 'light',
      icon: '☀',
      css: 'light'
    }, {
      name: 'dark',
      icon: '🌛',
      css: 'dark'
    }]

  let currentTheme
  $: currentTheme = themes.filter(t => t.css === $theme)[0]

  function toggleDarkTheme () {
    const otherThemes = themes.filter(t => t.css !== $theme)
    theme.set(
      otherThemes[0].css
    )
  }
</script>

<style>
  i {
    font-style: normal;
    font-size: 3em;
  }
</style>

<Tool icon={themes[$theme]} action={toggleDarkTheme}>
  {#if currentTheme}
    <i>
      {currentTheme.icon}
    </i>
  {:else}
    <Loading/>
  {/if}
</Tool>
