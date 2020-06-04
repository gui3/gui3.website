<script>
  import Repl from '../shared/Repl.svelte'

  let input =
`for (let i=0; i < 1000; i++) {
  let answer = ''
  answer += i % 3 === 0 ? 'Fizz' : ''
  answer += i % 5 === 0 ? 'Buzz' : ''
  answer += !answer ? i : ''
  console.log(answer)
}
`
</script>

<style>
</style>

<h2>FizzBuzz</h2>

<Repl>{input}</Repl>
