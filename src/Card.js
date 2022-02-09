import React, { Component } from 'react';
import hero_2 from './image/hero_2.jpg'

export default class Card extends Component {
    // constructor(props){
    //     super(props)
    //     this.name = "card"
    // }

  render() {
    return (
            <div className="card">
                <img src={hero_2} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
  }
}



