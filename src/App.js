import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './assets/styles/app.scss'
import GameBoard from './components/Board/GameBoard'
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <GameBoard/>
      </div>
    </Provider>
  );
}

export default App;
