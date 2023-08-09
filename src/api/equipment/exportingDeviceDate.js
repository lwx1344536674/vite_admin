import request from '@/utils/request'

export function exportHcyForDevice(data) {
  return request({
    url: 'sysAdmin/api/equipment/addHospital',
    method: 'post',
    data
  })
}

export function getHcyForDevice(ids) {
  return request({
    url: 'sysAdmin/api/equipment/deleteHospital',
    method: 'post',
    data: ids
  })
}

export default { exportHcyForDevice, getHcyForDevice }
