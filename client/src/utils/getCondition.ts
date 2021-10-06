export const getCondition = (current: 'new') => {
  return new Map([['new', 'Novo']]).get(current)
}
