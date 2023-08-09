import request from '@/utils/request'

export function getVideoTypeList() {
  return request({
    url: 'sysAdmin/api/adminVideo/getVideoTypeList',
    method: 'post'
  })
}

export default { getVideoTypeList }
