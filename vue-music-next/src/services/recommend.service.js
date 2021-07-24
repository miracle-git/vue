import { get } from './api.service'

export const getRecommendList = () => get('/api/recommend')
