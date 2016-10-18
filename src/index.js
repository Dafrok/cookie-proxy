export default new Proxy({}, {
  get(target, name) {
    const cookieList = document.cookie.split('; ')
    for (const item of cookieList) {
      const data = item.split('=')
      if (data[0] === name) {
        return data[1]
      }
    }
  },
  set(obj, prop, value) {
    document.cookie = `${prop}=${value}`
  }
})
