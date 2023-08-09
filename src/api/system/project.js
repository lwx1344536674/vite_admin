import request from '@/utils/request'

export function projectListByPage(data) {
  return request({
    url: 'sysAdmin/api/systemProject/projectListByPage',
    method: 'get',
    data })
}

export function add(data) {
  return request({ url: 'sysAdmin/api/systemProject/createProject', method: 'post', data })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/systemProject/updateProjectById',
    method: 'post',
    data })
}

export function del(data) {
  return request({ url: 'sysAdmin/api/systemProject/deleteProjectByIds', method: 'post', data })
}

export function getQuestionnaireManagement(data) {
  return request({
    url: 'sysAdmin/api/systemProject/getQuestionnaireManagement',
    method: 'post',
    data
  })
}

export function addQuestionnaire(data) {
  return request({
    url: 'sysAdmin/api/systemProject/addQuestionnaire',
    method: 'post',
    data
  })
}
export function getProjectList(data) {
  return request({
    url: 'sysAdmin/api/patient/getProjectList',
    method: 'get',
    data
  })
}

export default { projectListByPage, edit, add, del, getQuestionnaireManagement, addQuestionnaire, getProjectList }
