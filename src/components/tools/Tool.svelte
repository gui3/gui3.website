<script>
  export let icon = null
  export let action = null
</script>

<style>
  button {
    -width: 50px;
    -height: 50px;
  }
</style>

<button on:click={action} class="front">
  {#if icon}
    <label>
      {icon}
    </label>
  {/if}
  <slot/>
</button>
