import request from '@/utils/request'
/* 预约信息、评价信息、预约订单信息*/
/* 查询*/
export function findById(id) {
  return request({
    url: 'patient/admin/patientAppointment/findById?id=' + id,
    method: 'get'
  })
}
/* 保存*/
export function supplement(data) {
  return request({
    url: 'patient/admin/patientAppointment/supplement',
    method: 'post',
    data
  })
}
/* 评价信息*/
/* 保存*/
export function updateById(data) {
  return request({
    url: 'patient/admin/patientAppointment/updateById',
    method: 'post',
    data
  })
}
/* 预约订单信息*/
/* 保存*/
export function addOrder(data) {
  return request({
    url: 'patient/admin/patientAppointment/save',
    method: 'post',
    data
  })
}
export function launch(data) {
  return request({
    url: 'patient/admin/patientAppointment/launch',
    method: 'post',
    data
  })
}
export function finishOrder(data) {
  return request({
    url: 'patient/admin/patientAppointment/finishOrder',
    method: 'post',
    data
  })
}

export default { findById, supplement, updateById, addOrder, launch, finishOrder }

