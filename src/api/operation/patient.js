import request from '@/utils/request'

export function edit(data) {
  return request({
    url: 'sysAdmin/api/patient/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/patient/delete',
    method: 'post',
    data: ids
  })
}

export function detail(data) {
  return request({
    url: 'sysAdmin/api/patient/detail',
    method: 'post',
    data
  })
}

/* export function projectList(data) {
  return request({
    url: 'sysAdmin/api/patient/projectList',
    method: 'get',
    params: data
  })
}*/
export function columnSubList(data) {
  return request({
    url: 'sysAdmin/api/patient/columnSubList',
    method: 'get',
    params: data
  })
}
export function findAppQuestionnaire(data) {
  return request({
    url: 'sysAdmin/api/patient/findAppQuestionnaire',
    method: 'get',
    params: data
  })
}
export function getQuestionnaireReport(data) {
  return request({
    url: 'sysAdmin/api/patient/getQuestionnaireReport',
    method: 'get',
    params: data
  })
}
export function getById(id) {
  return request({
    url: 'sysAdmin/api/adverseReactionCode/getById?id=' + id,
    method: 'get'
  })
}

export default { edit, del, detail, getById, columnSubList, findAppQuestionnaire, getQuestionnaireReport }
