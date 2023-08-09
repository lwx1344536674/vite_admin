import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/addStudioAdvertisement',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/updateStudioAdvertisement',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/removeStudioAdvertisement',
    method: 'post',
    data
  })
}

export default { add, edit, del }
