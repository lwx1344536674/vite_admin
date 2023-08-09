import request from '@/utils/request'

export function getDetails(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/getPatientDetails',
    method: 'get',
    params: data
  })
}

// 生成方案确认
export function checkSchemeLevel(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/checkSchemeLevel',
    method: 'post',
    data
  })
}

// 生成方案
export function generateInterventionSolutions(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/generateInterventionSolutions',
    method: 'post',
    data
  })
}

// 获取商品列表
export function getGoodsList(data) {
  return request({
    url: 'sysAdmin/api/interventionRule/getGoodsList',
    method: 'post',
    data
  })
}

// 确认方案
export function saveInterventionSolutions(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/saveInterventionSolutions',
    method: 'post',
    data
  })
}

// 查看趋势图
export function getTrend(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctorHelper/getTrend',
    method: 'get',
    params: data
  })
}
// 创建随访计划
export function setPatientFollow(data) {
  return request({
    url: 'sysAdmin/admin/orgPatientFollow/setPatientFollow',
    method: 'post',
    data
  })
}
// 删除
export function deleteInterventionSolutions(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/deleteInterventionSolutions',
    method: 'get',
    params: data
  })
}
// 添加随访信息
export function addPatientFollow(data) {
  return request({
    url: 'sysAdmin/admin/orgPatientFollow/addPatientFollow',
    method: 'post',
    data
  })
}
export default {
  getDetails,
  checkSchemeLevel,
  generateInterventionSolutions,
  getGoodsList,
  saveInterventionSolutions,
  getTrend,
  setPatientFollow,
  deleteInterventionSolutions,
  addPatientFollow
}
