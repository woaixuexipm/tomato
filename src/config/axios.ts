import axios from 'axios'
//import history from './histroy'

const appID = "V9yJEHC5rWu7G8tdEHqotKWd"
const appSecret = "ugUerLCreEG3aRnyQAXDtEJm"

const instance = axios.create({
  baseURL: 'https://gp-server.hunger-valley.com/',
  headers: {
    't-app-id': appID,
    't-app-secret': appSecret
  }
})

instance.interceptors.request.use(function (config) {
  const xToken = localStorage.getItem('x-token')
  if (xToken) {
    config.headers['Authorization'] = `Bearer ${xToken}`
  }
  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})


instance.interceptors.response.use(function (response) {
  if (response.headers['x-token']) {
    localStorage.setItem('x-token', response.headers['x-token'])
  }
  return response
}, function (error) {
  if(error.response.status === 401){
    console.log('重定向')
    // history.push( '/login')
  }
  console.log('拦截')
  //history.push( '/login')
  window.location.href='/login'
  return Promise.reject(error)
})

export default instance