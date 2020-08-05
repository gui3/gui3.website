function multiMemoize (func, ttl = 60 * 60 * 1000) {
  const cache = new Map()

  function get (...args) {
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

  function clean () {
    const t0 = Date.now()
    cache.forEach((v, k) => {
      if (v.date + ttl < t0) {
        cache.delete(k)
      }
    })
  }

  return {
    get,
    clean
  }
}

export default multiMemoize
