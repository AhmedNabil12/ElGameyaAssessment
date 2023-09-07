import React from 'react';
import NavBar from './Components/NavBar/navbar';
import Layout from './Layout';

function App() {
  return (
  <div>
    <Layout />
  </div>
  
    /* <BrowserRouter>
    <div className='App'>
      <NavBar />
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="AllCards" >
           
          </Route>
          <Route path="AllSeries">
            <AllSeries />
          </Route>
          <Route path="AllSets">
            <AllSets />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>*/
  );
}

export default App;
