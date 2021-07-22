import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count); //getting current count from the store via our useSelector hook
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countFromStore); //ensuring we keep our input value in form upto date
  }, [countFromStore]);
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count)); //upon submitting dispatching set action with current value count taken from the form
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
