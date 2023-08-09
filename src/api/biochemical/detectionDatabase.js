import request from '@/utils/request'
// 检测项
export function add(data) {
  return request({
    url: 'user/admin/ocr/addDetectionItem',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'user/admin/ocr/updateDetectionItem',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'user/admin/ocr/deleteDetectionItem',
    method: 'delete',
    data: ids
  })
}

export default { add, edit, del }
