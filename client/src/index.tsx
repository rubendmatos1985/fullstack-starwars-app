import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
        <div>Hi</div>
      </Provider>
    );
}



render(<App />, document.getElementById('root'))