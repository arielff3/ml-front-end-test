import { TypeProduct } from 'src/@types/product.type'
import { api } from 'src/services/api'

export const searchItems = async (
  query: string,
): Promise<Omit<TypeProduct, 'pictures'>[]> => {
  const response = await api.get<{ items: Omit<TypeProduct, 'pictures'>[] }>(
    `/items?q=${query}`,
    {
      params: {
        limit: 4,
      },
    },
  )

  return response.data.items
}
