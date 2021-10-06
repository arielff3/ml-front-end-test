import { TypeProduct, TypeFilters } from './dtos/product.type';
import express, { json } from 'express';
import cors from 'cors'
import { api } from './services/api';

const app = express();
app.use(json());
app.use(cors());

app.get('/api/items', async (req, res) => {
  const query = req.query.q
  const response = await api.get<{ results: Omit<TypeProduct, 'pictures'>[], available_filters: TypeFilters[] }>(
    `sites/MLA/search?q=${query}`,
    {
      params: {
        limit: 4,
      },
    },
  )
  const data = {
    categories: response.data.available_filters.find(filter => filter.id === 'category')?.values.map(value => value.name),
    items: response.data.results,
  }
  return res.status(200).json(data);
});

app.get('/api/items/:id', async (req, res) => {
  const id = req.params.id
  const response = await api.get<{ results: TypeProduct[], available_filters: TypeFilters[] }>(
    `/items/${id}`,
  )
  const description = await api.get<{ plain_text: string }>(
    `/items/${id}/description`,
  )
  const data = {
    description: description.data.plain_text,
    ...response.data
  }
  return res.status(200).json(data);
});

app.listen(3002, () => {
  console.log('🚀 Server started on http://localhost:3002');
});
