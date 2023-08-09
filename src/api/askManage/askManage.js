import request from '@/utils/request'

export function remarkInfo(data) {
  return request({
    url: 'sysAdmin/api/patientConsult/remarkInfo',
    method: 'post',
    data
  })
}
export function update(data) {
  return request({
    url: 'sysAdmin/api/patientConsult/update',
    method: 'post',
    data
  })
}
export function close(data) {
  return request({
    url: 'sysAdmin/api/patientConsult/close',
    method: 'post',
    data
  })
}
export function bindTel(data) {
  return request({
    url: 'sysAdmin/api/patientConsult/bindTel',
    method: 'post',
    data
  })
}
export function sendTmpInfo(data) {
  return request({
    url: 'sysAdmin/api/patientConsult/sendTmpInfo',
    method: 'post',
    data
  })
}
export default { remarkInfo, update, close, bindTel, sendTmpInfo }
