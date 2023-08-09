import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'patient/admin/orderRecord/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'patient/admin/orderRecord/update',
    method: 'post',
    data
  })
}

/* export function refundOrder(orderId, refundType) {
  return request({
    url: 'sysAdmin/api/adminAudio/refundOrder',
    method: 'get',
    data: { orderId: orderId, refundType: refundType }
  })
}*/
export function refundOrder(orderId, refundType) {
  return request({
    url: 'patient/admin/orderRecord/refundOrder?orderId=' + orderId + '&&refundType=' + refundType,
    method: 'get'
  })
}

export default { add, edit, refundOrder }
