import React,{useState,useRef,useEffect,useContext} from 'react';
import {ThemeContext} from '../App'
interface IHelloProps  { 
    message?:string;
}

//方式一
/* const Hello= (props:IHelloProps)=>{
    return (
        <div>{props.message}</div>
    )
} */

//方式二

const Hello:React.FC<IHelloProps>= (props)=>{
    console.log('我是hello');
    
    const InputRef = useRef<HTMLInputElement>(null);
    const [number, setNumber] = useState(0);
    const theme = useContext(ThemeContext);
    console.log(theme);
    const btnstyle = {
        color:theme.color,
        background:theme.background
    };
    useEffect(()=>{
        if(InputRef && InputRef.current) {
            InputRef.current.focus()
        }
    })
    return (
        <div>
            {props.message}
            <input type="text"  ref={InputRef} />
            <button style={btnstyle} onClick={()=>{ setNumber(number+1)}} >focus this input</button>

            <hr />
        </div>
    )
}

Hello.defaultProps = {
    message:'ddddd'
}
export default Hello;