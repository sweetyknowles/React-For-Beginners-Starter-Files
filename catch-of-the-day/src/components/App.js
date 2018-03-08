import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from "./Fish"
class App extends Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = (fish) => {
        // take a copy of the existing state
        const fishes ={...this.state.fishes}
        // add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish
        // set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    }
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    }

addToOrder = (key) => {

    //1. take a copyof the state
    const order = {...this.state.order}
    //2. either add to the order or update our state props
    order[key] = order[key] +1 || 1

    //3 call setstate to update
    this.setState ({ Order })
}

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish key={key} details={this.state.fishes[key]}
                        addToOrder= {this.addToOrder} />
                        ))}
                    </ul>
                </div>
                    <Order />
                    <Inventory addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    />
            </div>
        )
    }
}
export default App;


