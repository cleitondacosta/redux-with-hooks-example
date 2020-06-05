export const OPERATIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const increment = amount => ({
  type: 'INCREMENT',
  amount
})

export const decrement = amount => ({
  type: 'DECREMENT',
  amount
})

