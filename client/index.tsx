import * as React from 'react';
import { Fragment } from 'react';
import * as ReactDOM  from 'react-dom';
import Home from './pages/Home';

const App = (props:any)=>(
    <Fragment>
        <Home/>  
    </Fragment>
);


ReactDOM.hydrate(<App/>, document.getElementById('root'))