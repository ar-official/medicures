import React from 'react';
import MainRoute from "./index"
import { createBrowserHistory } from 'history'
import { HashRouter } from 'react-router-dom'


const App = () => {
  const history = createBrowserHistory()
  return (
    <HashRouter>
      <MainRoute history={history} />
    </HashRouter>
  )
};

export default App;

