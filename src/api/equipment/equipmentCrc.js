import request from '@/utils/request'
import { getUrlKey } from '@/api/common'

export function add(data) {
  return request({
    url: 'sysAdmin/api/equipment/addCrc',
    method: 'post',
    data
  })
}

export function del(ids) {
  const equipmentId = getUrlKey('equipmentId')
  return request({
    url: 'sysAdmin/api/equipment/deleteCrc',
    method: 'post',
    data: {
      equipmentId: equipmentId,
      crcId: ids[0]
    }
  })
}

export default { add, del }
