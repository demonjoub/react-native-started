import axios from 'axios'
import _ from 'lodash'
import { project } from './../config'

/**
 * Axios middleware
 * @param store
 */
const axiosMiddleware = ({ getState }) => next => (action) => {
  // add token to axios header
  const authToken = _.get(getState()[project.name], 'user.token')
  axios.defaults.headers.common.Authorization = authToken || ''
  return next(action)
}

export default axiosMiddleware