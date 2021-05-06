import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './action';
export const SetCounter = () => {
  const initialState = useSelector((state) => state.count);

  const [count, setCount] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    setCount(initialState);
  }, [initialState]);
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
