import { OPERATIONS } from '../actions/counter';

const initialState = 0;

export default function counter (state = initialState, action) {
  switch (action.type) {
    case OPERATIONS.INCREMENT:
      return state + action.amount;

    case OPERATIONS.DECREMENT:
      return state - action.amount;

    default:
      return state;
  }
}
