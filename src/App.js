import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

function App() {
  return (

    <BrowserRouter>
        <div className="App">
       
      <Nav></Nav>
          <Switch>
            <Route exact path='/'component={Page1} />
            <Route path='/Page2' component={Page2} />            
          </Switch>
        </div>
      </BrowserRouter>    
  );
}

export default App;
