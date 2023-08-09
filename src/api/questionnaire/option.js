import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/collectOption/saveOrUpdate',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/collectOption/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/poctReport/deletePoctReport',
    method: 'post',
    data
  })
}

export default { add, edit, del }
