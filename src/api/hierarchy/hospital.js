import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/hospital/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/hospital/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/hospital/delete',
    method: 'post',
    data: ids
  })
}
export function hospitalConfigAdd(data) {
  return request({
    url: 'user/api/hospitalConfig/add',
    method: 'post',
    data
  })
}
export function hospitalConfigUpdate(data) {
  return request({
    url: 'user/api/hospitalConfig/update',
    method: 'post',
    data
  })
}
export function hospitalConfigGetById(ids) {
  return request({
    url: 'user/api/hospitalConfig/getById?id=' + ids,
    method: 'get'
  })
}
export default { add, edit, del, hospitalConfigAdd, hospitalConfigUpdate, hospitalConfigGetById }
