import request from '@/utils/request'

export function getByDetectionRegId(id) {
  return request({
    url: 'sysAdmin/api/detectionGeneRule/getByDetectionRegId?detectionRegId=' + id,
    method: 'get'
  })
}
export function getSmallGoodsList() {
  return request({
    url: 'sysAdmin/api/interventionRule/getGoodsList',
    method: 'post'
  })
}

export default { getByDetectionRegId, getSmallGoodsList }
