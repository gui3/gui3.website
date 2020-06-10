<script>
  export let icon = null
</script>

<style>
  span {
    margin: 0.5em 1em;
  }
</style>

<span>
  {#if icon}
    <label>
      {icon}
    </label>
  {/if}
  <slot/>
</span>
