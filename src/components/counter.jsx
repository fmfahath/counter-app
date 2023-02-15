import React, { Component } from 'react';

class Counter extends Component { 
     
    //property of Component class - state is a Special property - [its an object]
    state = {   
        count: 0,    //property
        imgUrl: "https://picsum.photos/200",
        address:{   //property
            HomeNo: "",
            Street: "",
        }
     }; 


     //Method of Component class
     formatCount(){
        const {count} = this.state; //object de-structure
        // return this.state.count === 0 ? "Zero" : this.state.count;
        return count === 0 ? "Zero" : count;

        // const x = <h1>Zero</h1>;
        // return count === 0 ? <h1>Zero</h1> : count;
        // return count === 0 ? x : count;

     }

     //---------------------------------------------------------------------------------

    // render() { 
    //     return <div><h1>Hello React.js</h1><button>Increment</button></div>;
    // }

    //------------------------------------------------------------------------------------

    // render(){
    //     return (
    //         <React.Fragment>
    //             <h1>Hello React.js</h1>
    //             <button>Increment</button>
    //         </React.Fragment>
    //     );
    // }

     //------------------------------------------------------------------------------------

     render(){
        return (
            <div>
                {/* <span>{this.state.count}</span> */} 
                <img src={this.state.imgUrl} alt="" />
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
}
 
export default Counter;