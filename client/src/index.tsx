import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
const App = () => {
  
  const [data, setData] = useState({});
  useEffect(()=>{
    fetch('http://localhost:3000/home/')
    .then((res:any) => res.json())
    .then(setData)
    .catch(err => console.log(err))
  },[])
  return (
    Object.keys(data).length > 0 
    ? <Provider store={store}>
        <div>Hi</div>
      </Provider>
    : <div>loading</div>
    
  );
}



render(<App />, document.getElementById('root'))