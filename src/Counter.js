import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.handleClickAdd=this.handleClickAdd.bind(this);
        this.handleClickMinus=this.handleClickMinus.bind(this);
        this.reset=this.reset.bind(this);
        this.state = {
            Counter : 0,
        }
    }
    handleClickAdd() {
        let {Counter} = this.state;
        this.setState({ Counter: ++Counter})
    }
    handleClickMinus() {
        let {Counter} = this.state;
        this.setState({ Counter: --Counter})
    }
    reset(){
        let {Counter} = this.state; 
        this.setState({Counter: 0})
    }

  render() {
    return <div>
        <button className= 'btn px-4 btn-primary' onClick = {this.handleClickAdd}>+</button>
        <button className= 'btn px-4 btn-danger'>{this.state.Counter}</button>
        <button  className= 'btn px-4 btn-success'onClick = {this.handleClickMinus}>-</button>
        <button  className= 'btn px-4 btn-warning 'onClick = {this.reset}>reset</button>
    </div>;
  }
}
