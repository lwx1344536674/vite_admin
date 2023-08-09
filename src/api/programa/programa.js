import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'train/api/knowledgeColumn/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'train/api/knowledgeColumn/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'train/api/knowledgeColumn/remove',
    method: 'post',
    data: ids
  })
}
export function checkHorizontalType(id) {
  return request({
    url: 'train/api/knowledgeColumn/checkHorizontalType?id=' + id,
    method: 'get'
  })
}
export default { add, del, edit }
