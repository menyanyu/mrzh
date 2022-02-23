import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'https://mlsjdbx.com:3000',
    timeout: 5000,
    headers: {}
  })
  return instance(config)
}
