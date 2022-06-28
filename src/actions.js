const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const SET = 'SET';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET, payload: 0 });
const set = (val) => ({ type: SET, payload: val });

export { DECREMENT, INCREMENT, RESET, increment, decrement, reset, set };