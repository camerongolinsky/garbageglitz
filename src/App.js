import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import TrashShop from './TrashShop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={TrashShop} />
          </Switch>
        </div>
      </Router>
    );
  }
    
  
// pass data as a prop into ProductList
export default App;
