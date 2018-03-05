import React from 'react';
import {getFunName} from "../helpers"



class StorePicker extends React.Component {

    
    
    myInput= React.createRef();
    
    
    gotToStore = (event)=> {
        //Stop the form from submitting 
        event.preventDefault()
        
        // get the text fromt he input
        const storeName= this.myInput.value.value
    
        // change the page to store /wahtever-they entered
        this.props.history.push(`/store/${storeName}`)
    }
    
    render() {
        return (
            
            <form className="store-selector" onSubmit={this.gotToStore}>
            <h2>Please Enter a Store</h2>

            <input type="text" required placeholder="Store Name"defaultValue ={getFunName()} /> 
            <button type =" submit"> Visit Store →</button>
             
        </form>
      
        )
}
}
    export default StorePicker;