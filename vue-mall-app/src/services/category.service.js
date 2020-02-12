import { get } from 'utils/fetch'
import api from 'config/api.conf'

export const getAllCategories = () => get(api.category.all, { loading: true })
export const getSubCategories = (maitKey) => get(api.category.sub, { loading: true, params: { maitKey } })
export const getCategoryDetail = (type, miniWallkey) => get(api.category.detail, { params: { type, miniWallkey } })
