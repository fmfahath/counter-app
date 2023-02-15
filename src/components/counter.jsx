import React, { Component } from 'react';

class Counter extends Component {   
    // state = {  } 
    // render() { 
    //     return <div><h1>Hello React.js</h1><button>Increment</button></div>;
    // }

    render(){
        return (
            <React.Fragment>
                <h1>Hello React.js</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}
 
export default Counter;