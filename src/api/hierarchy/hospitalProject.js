import request from '@/utils/request'
import { getUrlKey } from '@/api/common'

export function add(data) {
  return request({
    url: 'sysAdmin/api/hospital/saveOrUpdate',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/hospital/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(ids) {
  const hospitalId = getUrlKey('hospitalId')
  return request({
    url: 'sysAdmin/api/hospital/deleteProject',
    method: 'post',
    data: {
      hospitalId: hospitalId,
      projectId: ids[0]
    }
  })
}

export default { add, del, edit }
