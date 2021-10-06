import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from 'src/components/Header'
import { Loading } from 'src/components/Loading'
import { getCondition } from 'src/utils/getCondition'
import { getCurrencyInitials } from 'src/utils/getCurrencyInitials'
import { getProduct } from './controller'

import { Container, Content } from './styles'

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  if (!id) {
    history.push('/pagina-nao-existe')
  }
  const [inputSearch, setInputSearch] = useState('')

  const { data, isLoading } = useQuery('getProduct', () => getProduct(id), {
    onError: () => {
      toast.error('Ocorreu um erro.')
      history.push('/')
    },
  })

  const handleSearch = () => {
    history.push({
      pathname: '/',
      state: {
        query: inputSearch,
      },
    })
  }

  return (
    <Container>
      {isLoading && <Loading />}
      <Header
        onChangeInput={event => {
          setInputSearch(event.target.value)
        }}
        onClickButton={handleSearch}
      />
      {data && (
        <Content>
          <div className="infoSection">
            <img src={data.pictures[0].url} alt={data.title} />
            <aside>
              <span>{`${getCondition(data.condition)} - ${
                data.sold_quantity
              } vendidos`}</span>
              <h1>{data.title}</h1>
              <p>{`${getCurrencyInitials(
                data.currency_id,
              )} ${new Intl.NumberFormat(data.currency_id, {
                style: 'decimal',
              }).format(data.price)}`}</p>
              <button type="button">Comprar</button>
            </aside>
          </div>
          <div className="descriptionSection">
            <h2>Descrição do produto</h2>
            <pre>{data.description}</pre>
          </div>
        </Content>
      )}
    </Container>
  )
}
