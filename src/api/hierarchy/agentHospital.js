import request from '@/utils/request'
import { getUrlKey } from '@/api/common'

export function add(data) {
  return request({
    url: 'sysAdmin/api/agent/addHospital',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/agent/deleteHospital',
    method: 'post',
    data: ids
  })
}

export default { add, del }
