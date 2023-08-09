import request from '@/utils/request'

export function edit(data) {
  return request({
    url: 'sysAdmin/api/feedbackInfo/modify',
    method: 'post',
    data
  })
}

export default { edit }
