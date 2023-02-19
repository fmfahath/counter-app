import React, { Component } from 'react';

class Counter extends Component { 
     
    //property of Component class - state is a Specialondumilla property - [its an object]
    state = {   
        count: this.props.value,    //property
     }; 

     style = {
        padding: 5,
        fontSize: 15, 
        fontWeight: "bold",
        borderRadius: 10,
     };

     style_btn = {
        margin: 5,
        backgroundColor: "red",
     };


     //Method of Component class
     formatCount(){
        const {count} = this.state; //object de-structure
        return count === 0 ? "Zero" : count;
     }

     handleIncrement(){
        this.setState({count: this.state.count + 1});  
     }

     handleDecrement(){
        this.setState({count: this.state.count - 1});  
     }
 
     render(){ 
 
        return (
            <div>
                <p></p>
                <span style={this.style} className={this.getbadgeColourClass()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className='btn btn-secondary btn-sm'>Increment</button>
                <button style={this.style_btn} onClick={() => this.handleDecrement()} className='btn btn-secondary btn-sm'>Decrement</button>
                <br></br>
            </div>
        );    
    }

    getbadgeColourClass() {
        let badgeColourClass = "m-2 ";
        badgeColourClass += this.state.count === 0 ? "bg-warning" : "bg-primary";
        return badgeColourClass;
    }
}
 
export default Counter; 