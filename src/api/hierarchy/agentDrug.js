import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/agent/saveAgentDrug',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/agent/updateAgentDrug',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/agent/deleteAgentDrug',
    method: 'post',
    data: ids
  })
}

export function smallPromotionsList() {
  return request({
    url: 'sysAdmin/api/agent/smallPromotionsList',
    method: 'get'
  })
}

export default { add, edit, del, smallPromotionsList }
