const initialState = { count: 45 };
export const reducer = (state = initialState, action) => {
  if (action.type === 'Increment') {
    return { count: parseInt(state.count) + 1 };
  }
  if (action.type === 'Decrement') {
    return { count: parseInt(state.count) - 1 };
  }
  if (action.type === 'set') {
    return { count: action.payload };
  }
  return state;
};
