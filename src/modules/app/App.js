import React from 'react';
import MainRoute from "./index"
import { createBrowserHistory } from 'history'
import { HashRouter } from 'react-router-dom'


const App = () => {
  const history = createBrowserHistory()
  return (
    <>
      <HashRouter basename="/product"></HashRouter>
      <MainRoute history={history} />
    </>
  )
};

export default App;

