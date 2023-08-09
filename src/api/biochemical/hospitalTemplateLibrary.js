import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'user/admin/ocr/addHospitalTemplate',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'user/admin/ocr/updateHospitalTemplate',
    method: 'post',
    data
  })
}
export function del(ids) {
  return request({
    url: 'user/admin/ocr/deleteHospitalTemplate',
    method: 'delete',
    data: ids
  })
}
export function searchHospitalListByName(data) {
  return request({
    url: 'sysAdmin/api/hospital/searchHospitalListByName?name=' + data,
    method: 'get'
  })
}
export function searchDetectionItemList(data) {
  return request({
    url: 'user/admin/ocr/searchDetectionItemList?name=' + data,
    method: 'get'
  })
}

export default { add, edit, del, searchHospitalListByName, searchDetectionItemList }
