export const increment = () => {
  return { type: 'Increment' };
};
export const decrement = () => {
  return { type: 'Decrement' };
};
export const set = (value) => {
  return { type: 'set', payload: value };
};
