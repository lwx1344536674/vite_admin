import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'doctor/admin/goods/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'doctor/admin/goods/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'doctor/admin/goods/delete',
    method: 'post',
    data: ids
  })
}

export function getGoodsSubList(goodsId) {
  return request({
    url: 'doctor/admin/goods/getGoodsSubList?goodsId=' + goodsId,
    method: 'get'
  })
}

export default { add, del, edit, getGoodsSubList }
