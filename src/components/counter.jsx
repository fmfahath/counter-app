import React, { Component } from 'react';

class Counter extends Component { 
     
    //property of Component class - state is a Specialondumilla property - [its an object]
    state = {   
        value: this.props.value,    //property
     }; 

     style = {
        padding: 5,
        fontSize: 15, 
        fontWeight: "bold",
        borderRadius: 10,
     };


     //Method of Component class
     formatCount(){
        const {value: count} = this.state; //object de-structure
        return count === 0 ? "Zero" : count;
     }

     handleIncrement(){
        this.setState({count: this.state.value + 1});  
     }
 
     render(){ 
 
        return (
            <div>
                <p></p>
                <span style={this.style} className={this.getbadgeColourClass()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className='btn btn-secondary btn-sm'>Increment</button>
                <br></br>
            </div>
        );    
    }

    getbadgeColourClass() {
        let badgeColourClass = "m-2 ";
        badgeColourClass += this.state.value === 0 ? "bg-warning" : "bg-primary";
        return badgeColourClass;
    }
}
 
export default Counter; 