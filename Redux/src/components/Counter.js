import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {

  const count= useSelector(state=>state.counter);
  const dispatch=useDispatch();

  const inCounterHandler = () => {
   dispatch({type: 'increment'});
  };
  const deCounterHandler = () => {
    dispatch({type: 'decrement'});
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <span>
      <button onClick={inCounterHandler}>Increment</button>
      <div className={classes.value}>{count}</div>
      <button onClick={deCounterHandler}>Decrement</button>
      </span>
    </main>
  );
};

export default Counter;
