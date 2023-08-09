import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/collectQuestion/saveOrUpdate',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/collectQuestion/saveOrUpdate',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/collectQuestion/delete',
    method: 'post',
    data
  })
}

// 查询问题关联的选项
export function getQuestionOptionsById(id) {
  return request({
    url: 'sysAdmin/api/collectOption/getQuestionOptionsById?questionId=' + id,
    method: 'get'
  })
}

export default { add, edit, del,getQuestionOptionsById }
