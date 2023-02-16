import React, { Component } from 'react';

class Counter extends Component { 
     
    //property of Component class - state is a Special property - [its an object]
    state = {   
        count: 0,    //property
        tags: ["tag1","tag2","tag3"],
     }; 

     style = {
        padding: 5,
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 10,
     };


     //Method of Component class
     formatCount(){
        const {count} = this.state; //object de-structure
        return count === 0 ? "Zero" : count;
     }

     handleIncrement(){
        console.log("increment btn clicked");
     }

     render(){

        return (
            <div>
                <p></p>
                <span style={this.style} className={this.getbadgeColourClass()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <br></br>
                <br></br>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

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