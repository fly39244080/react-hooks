import React, {useContext,useReducer,useState,MouseEvent} from 'react';

import { navigate } from "@reach/router";
import { RouteComponentProps } from '@reach/router'
import useURLLoader from '../hooks/useURLLoader'
interface IshowResult {
    status:string,
    message:string
  }
const DogImage:React.FC<RouteComponentProps> = ()=>{
    const [ show, setShow ] = useState(true)
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show]);
    const DogResult =   data as IshowResult;
    function testFun(ev:MouseEvent){
        console.log(ev);
        navigate('/count')
    }
    return (
        <div>
            <button onClick={()=>{setShow(!show)}}>切换图片</button>
            <button onClick={(e)=>{ testFun(e) }}>跳转到</button>
        <p></p>
        {loading? '正在加载' : <img src={DogResult && DogResult.message} />}

        
        </div>
    )
}

export default DogImage;