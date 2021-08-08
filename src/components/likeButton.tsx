import React, { useState, useEffect, useRef, useContext } from 'react';
// import useMousePosition from '../hooks/useMousePosition'

const LikeButton:React.FC = ()=>{
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    // const positions = useMousePosition();
    const likeRef = useRef(0);

    //判断是否 生命周期更新
    const didMountRef = useRef(false);
    useEffect(() => {
        // console.log('document title effect is running')
        document.title = `点击了${like}次`
      },[like]);

      useEffect(()=>{
        if(didMountRef.current) {
            console.log('this is update page');
        } else {
            console.log('this is first load');
            didMountRef.current = true;
        }
      },[like])

    function testkm(){
        setTimeout(()=>{
            console.log(like);
            alert(likeRef.current);
        },3000);
    }
    return (
        <div>
            <button  onClick={() => {setLike(like + 1); likeRef.current++ }}>
                {like} 👍
            </button>

            <button onClick={testkm}>alert</button>

            {/* <p>X: {positions.x}, Y : {positions.y}</p> */}
            
        </div>
    )
}

export default LikeButton;