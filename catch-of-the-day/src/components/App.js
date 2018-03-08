import React, { Component } from 'react';
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"
import NotFound from "./NotFound"
import samplesFishes from "./sample-fishes"
import fish from "./Fish"


class App extends React. Component {
    state ={
        fishes: {},
        Order:{},

    }
    
    addFish = (Fish) =>{
        //1.// take a copy of the existing state.
        const fishes = { ... this.state.fishes}

        //2.add our new fish to our variable 
        fishes[`fish${Date.now()}`]= fish
        // this.state.fishes.push(fish)
        //3. set the new fishes object to state 
        this.setstate ({fishes})
        
        

    }
    
    
    loadSamplesFishes = () =>{
this.setstate({fishes:samplesFishes})


    }
    render() {
        return (
            <div className="catch-of-the-day">
            <div className="menu">
            <Header tagline="Fresh SeaFood Market"/>
            
            <ul className= "fishes">
            
            
            
            </ul>
            

            </div> 
            <Inventory 
            
            addFish={this.addFish}
            loadSamplesFishes={this.loadSamplesFishes} />
           
           
            <Order />
            </div>
             
            
         )
    }
}

export default App;