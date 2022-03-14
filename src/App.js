import React from "react";
import {useSelector , useDispatch} from 'react-redux';
import {increment, decrement} from './action';

function App() {

const counter  = useSelector(state=>state.counter);

const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      
      
    </div>
  );
}

export default App;
