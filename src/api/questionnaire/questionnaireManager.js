import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/questionnaireManager/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/questionnaireManager/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/questionnaireManager/delete',
    method: 'post',
    data
  })
}

export function getQuestionnaireTypes(data) {
  return request({
    url: 'sysAdmin/api/questionnaireManager/getQuestionnaireTypes',
    method: 'get',
    data
  })
}
export function getByQuestionnaireMangerId(id) {
  return request({
    url: 'sysAdmin/api/questionnaire/getByQuestionnaireMangerId?questionnaireMangerId=' + id,
    method: 'get'
  })
}
export default { add, edit, del, getQuestionnaireTypes, getByQuestionnaireMangerId }
