import request from '@/utils/request'
export function getBoardData(data) {
  return request({
    url: 'user/admin/statisticsDataBoard/getBoardData',
    method: 'get',
    params: data
  })
}
export function getAuthDataTree(type) {
  return request({
    url: 'user/admin/statisticsMaterielPatient/getAuthDataTree?type=' + type,
    method: 'get'
  })
}

export function getRanking(data) {
  return request({
    url: 'user/admin/statisticsDataBoard/ranking',
    method: 'get',
    params: data
  })
}

