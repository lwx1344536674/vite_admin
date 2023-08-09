import request from '@/utils/request'
import { getUrlKey } from '@/api/common'

export function add(data) {
  return request({
    url: 'sysAdmin/api/hospital/addDoctor',
    method: 'post',
    data
  })
}

export function del(ids) {
  const hospitalId = getUrlKey('hospitalId')
  return request({
    url: 'sysAdmin/api/hospital/deleteDoctor',
    method: 'post',
    data: {
      hospitalId: hospitalId,
      doctorId: ids[0]
    }
  })
}

export default { add, del }
