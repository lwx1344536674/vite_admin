import request from '@/utils/request'

export function getDoctorArticle(data) {
  return request({
    url: 'doctor/admin/doctorArticle/get?id=' + data,
    method: 'get'
  })
}
export function checkDoctorArticle(data) {
  return request({
    url: 'doctor/admin/doctorArticle/check',
    method: 'post',
    data
  })
}

export default { checkDoctorArticle, getDoctorArticle }
