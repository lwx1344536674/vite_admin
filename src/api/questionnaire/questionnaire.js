import request from '@/utils/request'
export function add(data) {
  return request({
    url: 'sysAdmin/api/questionnaire/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/questionnaire/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/questionnaire/delete',
    method: 'post',
    data
  })
}
export function getByQuestionnaireId(id) {
  return request({
    url: 'sysAdmin/api/collectQuestion/getByQuestionnaireId?questionnaireId=' + id,
    method: 'get'
  })
}
export default { add, edit, del, getByQuestionnaireId }
