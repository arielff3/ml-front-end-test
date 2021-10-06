export const getCurrencyInitials = (current: 'ARS' | 'BRL' | 'USD') => {
  return new Map([
    ['USD', '$'],
    ['ARS', '$'],
    ['BRL', 'R$'],
  ]).get(current)
}
