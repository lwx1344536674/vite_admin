import request from '@/utils/request'

export function edit(data) {
  return request({
    url: 'sysAdmin/admin/orgPatientFollow/addPatientFollow',
    method: 'post',
    data
  })
}

export default {
  edit
}
