import React, { Component } from 'react';

export default class button extends Component {
    constructor(props){
        super(props)
        // this.name = "click"
    }
  render() {
    return <div><button className='btn btn-primary' style={this.props.style} className={this.props.className}>{this.props.text}</button></div>;
  }
}


