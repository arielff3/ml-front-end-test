export interface TypeProduct {
  title: string
  description: string
  id: string
  condition: 'new'
  sold_quantity: number
  price: number
  currency_id: 'ARS' | 'BRL' | 'USD'
  thumbnail: string
  pictures: {
    url: string
  }[]
  address: {
    city_name: string
  }
}
