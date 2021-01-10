import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link 
  } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Product from './Components/Views/Product';




function App() {
  return (
    <div className="relative pb-10 minh-screen">
      

  
      <Router>
        <Header />
      
      
 
        
        
      <div className="p-3">
      <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
      </Switch>
      </div>
          <Footer />
        </Router>
      
      
    </div>
  );
}

export default App;
 