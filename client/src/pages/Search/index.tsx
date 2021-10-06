import Header from 'src/components/Header'

import { useQuery } from 'react-query'
import { getCurrencyInitials } from 'src/utils/getCurrencyInitials'
import { useState } from 'react'
import { useDebounce } from 'src/utils/useDebounce'
import { Loading } from 'src/components/Loading'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { Container, Card, Content } from './styles'
import { searchItems } from './controller'

export const Search = () => {
  const location = useLocation<{ query: string }>()
  const [searchValue, setSearchValue] = useState(location.state?.query || '')

  const debounceSearchValue = useDebounce(searchValue, 800)
  const { data, isLoading } = useQuery(
    [debounceSearchValue],
    () => searchItems(debounceSearchValue),
    {
      enabled: Boolean(location.state) || Boolean(debounceSearchValue),
      onError: () => {
        toast.error('Ocorreu um erro, tente novamente.')
      },
      onSuccess: response => {
        if (response.length === 0) {
          toast.info('Nenhum item encontrado.')
        }
      },
    },
  )

  return (
    <Container>
      {isLoading && <Loading />}
      <Header
        onChangeInput={event => {
          setSearchValue(event.target.value)
        }}
        defaultValuesInput={location.state?.query}
      />
      {data && data.length > 0 && (
        <Content>
          {data.map(item => (
            <Card to={`/produto/${item.id}`}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <b>{`${getCurrencyInitials(
                  item.currency_id,
                )} ${new Intl.NumberFormat(item.currency_id, {
                  style: 'decimal',
                }).format(item.price)}`}</b>
                <h6>{item.title}</h6>
              </div>
              <p>{item.address.city_name}</p>
            </Card>
          ))}
        </Content>
      )}
    </Container>
  )
}
