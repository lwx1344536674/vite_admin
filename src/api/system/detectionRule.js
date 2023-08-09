import request from '@/utils/request'

export function getByDetectionRegIds(id) {
  return request({
    url: 'sysAdmin/api/detectionRule/getByDetectionRegId?detectionRegId=' + id,
    method: 'get'
  })
}
export function getDetectionRuleTypes() {
  return request({
    url: 'sysAdmin/api/detectionRule/getDetectionRuleTypes',
    method: 'get'
  })
}

export default { getByDetectionRegIds, getDetectionRuleTypes }
