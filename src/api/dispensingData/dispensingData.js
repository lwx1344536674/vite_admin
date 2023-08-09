import request from '@/utils/request'

export function adminList(searchId, type, date) {
  return request({
    url: 'user/admin/statisticsMaterielPatient/adminList?searchId=' + searchId + '&type=' + type + '&date=' + date + '&page=1&size=100000',
    method: 'get'

  })
}

export function findByTownId(townId, date) {
  return request({
    url: 'user/admin/statisticsMaterielPatient/findByTownId?townId=' + townId + '&date=' + date,
    method: 'get'
  })
}

export function getTotal(data) {
  return request({
    url: 'user/admin/statisticsMaterielPatient/total',
    method: 'get',
    params: data
  })
}

export default { adminList, findByTownId, getTotal }
