import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/giftPhoneRecord/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/giftPhoneRecord/updateById',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/admin/giftPhoneRecord/remove',
    method: 'post',
    data: ids
  })
}
export default { add, del, edit }
