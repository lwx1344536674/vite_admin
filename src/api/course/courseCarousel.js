import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/courseCarousel/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/courseCarousel/update',
    method: 'post',
    data
  })
}
export function del(ids) {
  return request({
    url: 'sysAdmin/api/courseCarousel/del',
    method: 'post',
    data: ids
  })
}

export function getProjectIdsById(id) {
  return request({
    url: 'sysAdmin/api/courseCarousel/getProjectIdsById?id=' + id,
    method: 'get'
  })
}

export function updateProjectRel(data) {
  return request({
    url: 'sysAdmin/api/courseCarousel/updateProjectRel',
    method: 'post',
    data
  })
}
export default { add, edit, del, getProjectIdsById, updateProjectRel }

