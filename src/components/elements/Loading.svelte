<script>
  import { onMount, onDestroy } from 'svelte'

  export const mini = true
  export const maxLength = 4
  export const symbol = '.'
  export const time = 222

  let dots = symbol
  $: invisibles = '.'.repeat(maxLength - dots.length + 1)

  let interval

  onMount(function () {
    interval = setInterval(function () {
        dots = dots.length < maxLength
          ? symbol.repeat(dots.length + 1)
          : symbol
      }, time)
  })
  onDestroy(function () {
    clearInterval(interval)
  })
</script>

<style>
  .invisible {
    color: rgba(0, 0, 0, 0);
    opacity: 0;
  }

</style>

<span>
  {#if !mini}Loading {/if}
  {dots}
  <span class="invisible">
    {invisibles}
  </span>
</span>
