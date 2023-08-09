import request from '@/utils/request'
export function del(data) {
  return request({
    url: 'doctor/admin/doctorReview/delete',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'doctor/admin/doctorReview/modify',
    method: 'post',
    data
  })
}

export default { del, edit }
