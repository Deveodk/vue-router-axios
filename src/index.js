function plugin (Vue, options) {
  if (Vue.prototype.$http === undefined) {
    console.warn('[@deveodk/vue-router-axios]: axios must be set before using this plugin')
  }

  const CancelToken = options.axios.CancelToken
  let source = CancelToken.source()

  Vue.mixin({
    beforeRouteEnter (to, from, next) {
      source.cancel()
      source = CancelToken.source()
      next()
    }
  })

  Vue.prototype.$http.interceptors.request.use(function (response) {
    // Do something with response data
    const excludeLength = options.excludePaths.length

    const path = response.url.replace(response.baseURL, '')

    for (let i = 0; i < excludeLength; i++) {
      const regexTest = options.excludePaths[i].replace(/\//g, '\\/')
      const patternMatch = new RegExp(regexTest).test(path)

      if (patternMatch) {
        return response
      }
    }

    response.cancelToken = source.token
    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error)
  })
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version
}
