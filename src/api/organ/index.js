import request from '@/utils/request'

export function getIndexData(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/getFrontSummary',
    method: 'get',
    params: data
  })
}
export default { getIndexData }
