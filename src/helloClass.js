import './helloClass.css';
import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state = { count: "Zero" }
    }
    incrementCount = () => {
        if(this.state.count === "Zero"){
            this.setState({count: 1});
            return;
        }
        if(this.state.count === 10){
            this.setState({count: "Zero"});
            return;
        }
        this.setState({count: this.state.count + 1})
    }
    render() { 
        return (
            <div className="parent">
                <label>{this.state.count}</label>
                <button onClick={this.incrementCount}>Counter to 10</button>
            </div>
        );
    }
}
 
export default Counter;