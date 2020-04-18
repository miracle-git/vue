import { DataHttp } from 'm2-core'
import { app, env } from './index'

export default DataHttp.getInstance({
  app, env,
  check(res) {
    if (res.status === 10) {
      if (!['/', '/home'].includes(app.$route.path)) {
        app.$router.push('/login')
        return false
      }
    }
    return true
  },
  map: {
    result: 'data'
  }
})
