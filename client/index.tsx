import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = (props:any)=>(
    <BrowserRouter>
        {renderRoutes(Routes)}  
    </BrowserRouter>
);


ReactDOM.hydrate(<App/>, document.getElementById('root'))