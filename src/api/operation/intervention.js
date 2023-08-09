import request from '@/utils/request'

export function interventionRuleListByPage(data) {
  return request({
    url: 'api/interventionRule/getInterventionRuleListByPage',
    method: 'get',
    data })
}

export function add(data) {
  return request({ url: 'sysAdmin/api/interventionRule/createInterventionRule', method: 'post', data })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/interventionRule/updateInterventionRule',
    method: 'post',
    data })
}

export function del(data) {
  return request({ url: 'sysAdmin/api/interventionRule/deleteInterventionRuleByIds', method: 'post', data })
}

export default { interventionRuleListByPage, edit, add, del }
