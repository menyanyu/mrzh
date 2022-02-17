import { request } from './request'

export function loginAxios (config) {
  return request({
    url: '/',
    params: config
  })
}
