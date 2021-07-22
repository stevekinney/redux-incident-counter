import { useCounter } from './useCounter';

import { SetCounter } from './SetCounter';
//do look at previous commits to see how different patterns were used earlier prior to moving everything to custom hooks
export const Counter = () => {
  const incident = 'Incident';
  const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
