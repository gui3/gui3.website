class Cache {
  constructor (ttl = 60 * 60 * 1000) {
    this.data = new Map()
    this.ttl = ttl
  }

  set (key, val) {
    let keyid = JSON.stringify(key)
    this.data.set(keyid, {
      date: Date.now(),
      value: val
    })
  }

  getAny (key) {
    let keyid = JSON.stringify(key)
    const data = this.data.get(keyid)
    return data
  }

  getValid (key) {
    let keyid = JSON.stringify(key)
    const data = this.data.get(keyid)
    if (data === undefined) {
      return undefined
    } else if (this.ttl > 0 &&
      data.date + this.ttl < Date.now()) {
      this.data.delete(keyid)
      return undefined
    } else {
      return data
    }
  }

  deleteOutdatedData () {
    if (this.ttl < 1) {
      throw new Error('cache has no ttl, cannot deleteOutdatedData')
    }
    this.cache.forEach((key, data) => {
      if (data.date + this.ttl > Date.now()) {
        this.data.delete(key)
      }
    })
  }
}

export default Cache
