import request from '@/utils/request'

export function projectList() {
  return request({
    url: 'sysAdmin/api/common/projectList',
    method: 'get'
  })
}

export function getAffiliationList() {
  return request({
    url: 'sysAdmin/api/affiliation/affiliationList',
    method: 'get'
  })
}

export function getSysConfigByKey(key) {
  return request({
    url: 'sysAdmin/api/sysConfig/getSysConfigByKey?key=' + key,
    method: 'get'
  })
}

export function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}

export default { projectList, getUrlKey, getAffiliationList, getSysConfigByKey }
