import React from 'react';
import MainRoute from "./index"
import { createBrowserHistory } from 'history'


const App = () => {
  const history = createBrowserHistory()
  return (
    <>
        <MainRoute history={history} />
    </>
  )
};

export default App;

