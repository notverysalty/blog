class Util {
  baseKey = 'token'
  getSession (key) {
    return window.sessionStorage.getItem(key)
  }
  setSessino (key, value) {
    window.sessionStorage.setItem(key, value)
  }
  removeSession (key) {
    window.sessionStorage.removeItem(key)
  }
  getLocal (key) {
    return window.localStorage.getItem(key)
  }
  setLocal (key, value) {
    window.localStorage.setItem(key, value)
  }
  removeLocal (key) {
    window.localStorage.removeItem(key)
  }
  localClear () {
    window.localStorage.clear()
  }
}

export default new Util()