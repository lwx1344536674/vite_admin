import request from '@/utils/request'

export function getVideoTypeList(id) {
  console.log(333, id)
  return request({
    url: 'doctor/admin/recommendArticle/getlistById?id=' + id,
    method: 'get'
  })
}

export default { getVideoTypeList }
