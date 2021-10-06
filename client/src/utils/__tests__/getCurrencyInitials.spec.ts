import { getCurrencyInitials } from '../getCurrencyInitials'

describe('getCurrencyInitials', () => {
  it('Should be able return a currency', () => {
    expect(getCurrencyInitials('USD')).toEqual('$')
  })
})
