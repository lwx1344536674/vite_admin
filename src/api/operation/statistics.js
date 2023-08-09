import request from '@/utils/request'
export function getAffiliationCharData(affiliationId, date) {
  return request({
    url: 'sysAdmin/api/affiliationData/getAffiliationCharData?affiliationId=' + affiliationId + '&date=' + date,
    method: 'get'
  })
}
export default { getAffiliationCharData }
