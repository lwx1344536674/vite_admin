import request from '@/utils/request'

export function updateIsVirtual(data) {
  return request({
    url: 'sysAdmin/api/appLoginLog/updateIsVirtual',
    method: 'post',
    data
  })
}

export default { updateIsVirtual }
