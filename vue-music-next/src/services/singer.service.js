import { get } from './api.service'

export const getSingerList = () => get('/api/singer')
export const getSingerDetail = (singer) => get('/api/singer/detail', { mid: singer.mid })
