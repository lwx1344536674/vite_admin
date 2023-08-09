import request from '@/utils/request'
export function send(id) {
  return request({
    url: 'small/admin/order/send',
    method: 'post',
    data: { id: id }
  })
}

export function fahuo(id, physicalCompanyName, physicalNo) {
  return request({
    url: 'small/admin/order/adminFahuo',
    method: 'post',
    data: { id: id, physicalCompanyName: physicalCompanyName, physicalNo: physicalNo }
  })
}

export default { send, fahuo }
