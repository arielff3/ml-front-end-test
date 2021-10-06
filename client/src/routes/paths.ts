import { lazy } from 'react'

export const Search = lazy(() =>
  import('src/pages/Search').then(module => ({
    default: module.Search,
  })),
)

export const Product = lazy(() =>
  import('src/pages/Product').then(module => ({
    default: module.Product,
  })),
)

export const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/').then(module => ({
    default: module.GenericNotFound,
  })),
)
