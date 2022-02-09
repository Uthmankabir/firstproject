import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top pt-2 mb-4">
        <div className="container">
          <a className="navbar-brand display2" href="#"><h3>SAILOR</h3></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Team</a></li>
                  <li><a className="dropdown-item" href="#">Testimonial</a></li>
                   <li><a className="dropdown-item" href="#">Deep Drop Down</a></li>
                <div className="dropdown dropend">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Deep Drop Down
                  </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Normal</a></li>
                    <li><a className="dropdown-item active" href="#">Active</a></li>
                    <li><a className="dropdown-item disabled" href="#">Disabled</a></li>
                  </ul>
                </div>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-danger p-1">Get Started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    {/* side-bar */}

<div className='container-fluid'>

  <div className='row'>
    
    <div className='col-lg-2'>
    <nav class="navbar bg-light h-100vh mt-3">
    <div class="container-fluid">
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
    </ul>
    </div>
</nav>


    </div>

  <div className='row col-10'>
    <div className='col-4'><Card/></div>
    <div className='col-4'><Card/></div>
    <div className='col-4'><Card/></div>
  </div>

  <Button text="Get Started" className="btn btn-success p-4"/>

    
<form action="/action_page.php"/>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"/><br/>
  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="pwd" minlength="8"/><br/>
  <input type="submit"/>
<form/>


  </div>



</div>


  {/* <nav class="navbar bg-light h-100vh mt-3">
  <div class="container-fluid">
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </div>
</nav> */}

     <div className='mt-3'>
       <Counter/>
     </div>


    </div>
  );
}

export default App;
