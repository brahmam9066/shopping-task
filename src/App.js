import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarHead from './components/NavbarHead';
import CartComponent from './components/CartComponent';
import ProductsComponent from './components/ProductsComponent';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <NavbarHead/>
                <Switch>
                    <Route exact path="/" component={ProductsComponent}/>
                    <Route path="/cart" component={CartComponent}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;

