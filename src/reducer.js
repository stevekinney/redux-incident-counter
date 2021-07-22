import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = { count: 0 };

//reducer is where we manipulate a state. Note that we never directly mutate a state. We always return a new object
//my exercise: try undo(previous value)/redo(future value)
export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    //all logic should be done in reducer by convention. Avoid doing any logic in the actions
    return { count: parseInt(action.payload, 10) };
  }
  return state;
};
