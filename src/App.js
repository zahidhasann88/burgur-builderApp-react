import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import { store } from './redux/store';

function App() {
  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
