import request from '@/utils/request'
export function additionalDetection(data) {
  return request({
    url: 'sysAdmin/api/additionalDetection/save',
    method: 'post',
    data
  })
}

export default { additionalDetection }
