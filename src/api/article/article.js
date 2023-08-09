import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/article/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/article/updateById',
    method: 'post',
    data
  })
}
export function approveFlag(data) {
  return request({
    url: 'sysAdmin/admin/article/approveFlag',
    method: 'post',
    data
  })
}
export function getPrograma(data) {
  return request({
    url: 'train/api/knowledgeColumn/getKnowledgeColumnList',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/admin/article/remove',
    method: 'post',
    data: ids
  })
}
export default { add, del, edit, approveFlag }
