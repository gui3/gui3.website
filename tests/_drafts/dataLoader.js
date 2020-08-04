// import DataCacheNLoader from '../../src/utils/DataCacheNLoader.js'
import multiMemoize from '../../src/utils/multiMemoize.js'

let data = 0

function dataLoader (arg1, arg2) {
  data++
  return 'args: ' + arg1 + ',' + arg2 + ' data:' + data
}

function dataLoaderAsync (arg1, arg2) {
  data++
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('args: ' + arg1 + ',' + arg2 + ' data:' + data)
    }, 1000)
  })
}

const loader = multiMemoize(dataLoaderAsync, 60*60*1000)

function test (text) {
  const result = loader('hello', 'world')
  console.log(text + JSON.stringify(result))
  result.then(data => console.log(text + ':result:' + data))
    .catch(err => { throw err })

}
test('1:')
test('2:')
test('3:')
test('4:')

setTimeout(_=> {
  test('5 +1000:')
},1000)

setTimeout(_=> {
  test('5 +6000:')
},6000)

setTimeout(_=> {
  test('5 +6500:')
},6500)

/*
loader.get('hello', 'world')
  .then(data => console.log(data))
  .catch(err => {throw err})

setTimeout(_=> {
  loader.get('hello', 'world')
    .then(data => console.log(data))
    .catch(err => {throw err})
}, 500)
setTimeout(_=> {
  loader.get('hello', 'world')
    .then(data => console.log(data))
    .catch(err => {throw err})
}, 1500)
setTimeout(_=> {
  loader.get('hello', 'world')
    .then(data => console.log(data))
    .catch(err => {throw err})
}, 6500)

*/

/*

console.log(loader.get('hello', 'world'))
console.log(loader.get('hello', 'YOU'))

loader.cache.data.forEach((v, k) => {
  console.log(k + ':'+JSON.stringify(v))
})
console.log(loader.get('hello', 'world'))
console.log(loader.get('hello', 'YOU'))

setTimeout(_ => {
  console.log('+5000')
  console.log(loader.get('hello', 'YOU'))
}, 5000)
setTimeout(_ => {
  console.log('+5500')
  console.log(loader.get('hello', 'YOU'))
}, 5500)

*/
