import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";
import itemImage from "./assets/bandmember.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-items">
          <a href="#" className="nav-item nav-item-left">
            HOME
          </a>
          <a href="#band" className="nav-item nav-item-left">
            BAND
          </a>
          <a href="#tour" className="nav-item nav-item-left">
            TOUR
          </a>
          <a href="#contact" className="nav-item nav-item-left">
            CONTACT
          </a>

          <a href="void(0)" className="nav-item nav-item-right">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </div>
      </div>
      <div className="body-wrap">
        <div className="heading">
          <h3> My Items</h3>
        </div>
        <div className="content">
          <p>
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="items">
          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>

          <div className="media">
            <div className="image">
              <img src={itemImage} />
              <p>Rating</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <div className="content">
              <h4> Item Name Here </h4>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <h6>
                Sales Start from <span>$99.00</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* </div>
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 

        
      </header>
    </div> 
    */
}
