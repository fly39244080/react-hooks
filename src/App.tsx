import React, {useState,useMemo} from 'react';

import './styles/index.scss';
import Hello from './components/hello'
import LikeButton from './components/likeButton'
import Counter from './components/count'
import DogImage from './components/dogImage'
import UploadFile from './components/Upload/index2'
// import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'

import withLoader from './components/withLoader'


import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes: IThemeProps = {
 'light': {
   color: '#000',
   background: '#fff',
 },
 'dark': {
    color: '#fff',
    background: '#000',
  }
}

export const ThemeContext = React.createContext(themes.light);
const App:React.FC = ()=>{
  // var positions = useMousePosition();
  const [num, setNum] = useState(0);

    const onProgress = (data:any) => {
      console.log('进度')
      console.log(data)
    }
    const onSuccess = (data:any) => {
      console.log(data)
    }
    const onError = (data:any) => {
      console.log(data)
    }

  return (
    <ThemeContext.Provider value={themes.dark}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message='hello , i am laney'></Hello>
        <LikeButton></LikeButton>
      </header> */}
  
      {/* <button onClick={()=>{ setNum(num+1) }}>改变theme  {num}</button>
      <ul className="top-menu">
        <li><Link to="/count">计数器</Link></li>
        <li><Link to="/dog">小狗狗</Link></li>
      </ul> */}
      {/* {useMemo(()=><Hello />,[num])} */}
      

      <UploadFile
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onProgress={onProgress}
        onSuccess={onSuccess}
        onError={onError}
        />
      <Router>
          <Counter path="/count" />
          <DogImage path="/dog" />
          {/* <Upload path="/upload" /> */}
      </Router>

    </div>
    </ThemeContext.Provider>
  );
}
export default App;
