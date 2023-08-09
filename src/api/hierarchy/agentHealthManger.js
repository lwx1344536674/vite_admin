import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'doctor/api/agentHealthManger/createHealthManger',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'doctor/api/agentHealthManger/updateHealthManger',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'doctor/api/agentHealthManger/deleteHealthManger',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del }