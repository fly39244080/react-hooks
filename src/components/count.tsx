import React, {useContext,useReducer,useState} from 'react';
import { RouteComponentProps } from '@reach/router'

import {Button} from './ButtonCol'
import Progress from './Progress'
import Icon from './Icon'
const initialState = {count: 0};

interface IAction {
    type:string,
    payload?:{
        [key:string]:string
    } | any
}
interface IState {
    count:number
}
function reducer(state:IState, action:IAction) {
  switch (action.type) {
    case 'increment':    
      return {count: state.count + action.payload};
    case 'decrement':
      return {count: state.count - action.payload};
    case 'reset':
        return {
            count:action.payload.count
        };
    default:
      throw new Error();
  }
}

const Counter:React.FC<RouteComponentProps> = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    // dispatch 触发reducer执行

    return (
      <div>
        <>
          Count: {state.count} 
          <hr />
          <button onClick={() => dispatch({
              type: 'decrement',
              payload:10})}> 减-</button>  &nbsp;
          <button onClick={() => dispatch({type: 'increment',payload:10})}> 加+</button>
          <button onClick={() => dispatch({type: 'reset' , payload: initialState})}> 重置</button>
        </>

        </div>
      );
}

export default Counter;