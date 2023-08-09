import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'user/api/commonTownship/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'user/api/commonTownship/update',
    method: 'post',
    data
  })
}
export function del(data) {
  return request({
    url: 'user/api/commonTownship/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
