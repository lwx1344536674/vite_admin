import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/informedConsentForm/saveOrUpdate',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/informedConsentForm/saveOrUpdate',
    method: 'post',
    data
  })
}
// 发布/暂停
export function releaseOrPause(data) {
  return request({
    url: 'sysAdmin/api/informedConsentForm/releaseOrPause',
    method: 'post',
    data
  })
}

export default { add, edit, releaseOrPause }
