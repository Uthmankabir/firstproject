import React, { Component } from 'react';

export default class Login extends Component {
    constructor(prop){
        super(props)
    }
  render() {
    return <div>
 <form action="/action_page.php"/>
  
  <label for="email">Email:</label>
  <input type="email" name="email" placeholder='name'/><br/>
  <label for="pwd">Password:</label>
  <input className="p-5" type="password" name="pwd" placeholder='*******'/><br/>
  <button>submit</button>
  
<form/>
    </div>;
  }
}
