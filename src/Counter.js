import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';
export const Counter = () => {
  const incident = 'Incident';
  /**A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state. */
  //useSelector replacement for mapStateToProps
  const count = useSelector((state) => state.count);
  //useDispatch is a replacement for mapDispatchToProps and it gives us access to redux dispatch method
  const dispatch = useDispatch();
  //instead of using dispatch everytime the way we were doing below we could also bind all our action creators with dispatch
  //that way we could directly call the function. To me this looks more readable
  const actions = bindActionCreators({ increment, decrement, set }, dispatch);
  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        {/* dispatching our actions below. set is the only one that takes an argument */}
        {/* <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
