import request from '@/utils/request'

export function getProjectList() {
  return request({
    url: 'sysAdmin/api/systemProject/projectList',
    method: 'get'
  })
}
export default { getProjectList }
