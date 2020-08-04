import Cache from './Cache.js'

class DataCacheNLoader {
  constructor (loadingFunc, validate = null, ttl = 60 * 60 * 1000) {
    this.cache = new Cache(ttl)
    this.loadingFunc = loadingFunc
    if (typeof validate !== 'function') {
      validate = function (data) { return data !== undefined }
    }
    this.validateData = validate

    this.isAsync = undefined
  }

  makeResult (status, data, date) {
    const resolved = !(data instanceof Promise)
    const promise = resolved
      ? new Promise((resolve, reject) => {
        resolve(data)
      })
      : data
    const value = resolved ? data : null
    return {
      status: status,
      value: value,
      promise: promise,
      resolved: resolved,
      date: date || Date.now(),
      async: this.isAsync
    }
  }

  get () {
    var args = []
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    const cached = this.cache.getValid(args)
    if (cached === undefined) {
      return this.forceLoad(...args)
    } else if (cached.value instanceof Promise) {
      return this.makeResult('pending', cached.value, cached.date)
    } else {
      return this.makeResult('cached', cached.value, cached.date)
    }
  }

  forceLoad () {
    var args = []
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    const result = this.loadingFunc(...args)
    if (!this.isAsync && result instanceof Promise) {
      this.isAsync = true
    } else if (this.isAsync && !(result instanceof Promise)) {
      this.isAsync = false
    }
    if (this.isAsync) {
      this.cache.set(args, result)
      const pending = result
        .then(data => {
          if (this.validateData(data)) {
            this.cache.set(args, data)
          } else {
            return this.makeResult('error', null, Date.now())
          }
          return data
        })
        .catch(err => {
          throw err
        })
      return this.makeResult('pending', pending, Date.now())
    } else { // not async-------------------------
      if (this.validateData(result)) {
        this.cache.set(args, result)
        return this.makeResult('reloaded', result, Date.now())
      } else {
        const cached = this.cache.getAny()
        return this.makeResult(
          'could_not_reload',
          cached.value || null,
          cached.date || Date.now()
        )
      }
    }
  }
}

export default DataCacheNLoader
