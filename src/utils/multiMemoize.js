function multiMemoize (func, ttl = 60 * 60 * 1000) {
  const cache = new Map()

  function run (...args) {
    const key = JSON.stringify(args)
    const cached = cache.get(key)
    if (cached !== undefined && (ttl === 0 || cached.date + ttl > Date.now())) {
      return cached.result
    } else {
      const value = {
        result: func(...args),
        date: Date.now()
      }
      cache.set(key, value)
      return value.result
    }
  }
  return run
}

export default multiMemoize
