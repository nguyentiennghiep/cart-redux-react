import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
   render()
   {
       return (
        <div className = "App">
        <Header/>
        <main id="mainContainer">
            <div className="container">
               
                <ProductsContainer/>
           
                <Message/>
            
                <Cart/>
            </div>
        </main>
        <Footer/>  
    </div>
       );
   }
}

export default App;
