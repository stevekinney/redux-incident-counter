import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import { increment, decrement, set } from './actions';
import { useMemo } from 'react';

//our custom hook that will bind our counter to appropriate actions returns the count value with all the bound actions
export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });
  return useMemo(() => {
    return { count, ...actions };
  }, [count, actions]);
};
