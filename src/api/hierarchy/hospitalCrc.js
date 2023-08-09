import request from '@/utils/request'
import { getUrlKey } from '@/api/common'

export function add(data) {
  return request({
    url: 'sysAdmin/api/hospital/addCrc',
    method: 'post',
    data
  })
}

export function del(ids) {
  const hospitalId = getUrlKey('hospitalId')
  return request({
    url: 'sysAdmin/api/hospital/deleteCrc',
    method: 'post',
    data: {
      hospitalId: hospitalId,
      crcId: ids[0]
    }
  })
}

export default { add, del }
