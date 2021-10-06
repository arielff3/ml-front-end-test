import { getCondition } from '../getCondition'

describe('getCondition', () => {
  it('Should be able return a condition', () => {
    expect(getCondition('new')).toEqual('Novo')
  })
})
