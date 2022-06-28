const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';
const SET = 'SET';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const set = (val) => ({ type: SET, payload: val });

export { DECREMENT, INCREMENT, SET, increment, decrement, set };