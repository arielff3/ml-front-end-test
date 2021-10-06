import { TypeProduct } from 'src/@types/product.type'
import { api } from 'src/services/api'

export const getProduct = async (id: string): Promise<TypeProduct> => {
  const response = await api.get<TypeProduct>(`/items/${id}`)
  return response.data
}
