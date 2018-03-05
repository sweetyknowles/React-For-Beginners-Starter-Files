import React, { Component } from 'react';
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"
import NotFound from "./NotFound"



class App extends React. Component {
    state ={
        fishes: {},
        Order:{},

    }
    
    addFish = (Fish) =>{

    }
    
    
    
    render() {
        return (
            <div className="catch-of-the-day">
            <div className="menu">
            <Header tagline="Fresh SeaFood Market"/>
            

            </div> 
            <Inventory addFish={this.addFish} />
            <Order />
            </div>
             
            
         )
    }
}

export default App;