import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Box from './box';
import Popup from 'reactjs-popup'
import PopupButton from './popup'
// import logo from './logo.svg';
import './App.css';

function ShoppingCart(props){
  // props:
  // filterBox={this.filterBox} 
  // changeSize={this.changeSize}
  // sortOrder={this.sortOrder}
  // addItem={this.addItem}
  // removeItem={this.removeItem}
  // boxes={boxes}
  // shoppingCartItems={shoppingCartItems}
  // size={size}
     
      return (
        <div className="App">
          <header>
            <h1>Dress Shop</h1>
          </header>
          <div className="sub-header">
            <div className="sorter">
              <label htmlFor="">Order by</label>
              <div className="select-box">    
                <select onChange={props.sortOrder}>
                  <option value="0">select</option>
                  <option value="1">price lowest to highest</option>
                  <option value="2">price highest to lowest</option>            
                </select>
                </div>
            </div>

            <div className="cart">
              {<PopupButton items ={props.shoppingCartItems} remove={props.removeItem}/>}
              
            </div>

          </div>

          <div className="container">
            <div className="sidebar">
              <label htmlFor="">Size</label>
              <div>
                <button onClick = {() => props.changeSize("S")}>S</button>
                <button onClick ={() => props.changeSize("M")}>M</button>
                <button onClick ={() => props.changeSize("L")}>L</button>
                <button onClick ={() => props.changeSize(null)}>All</button>
              </div>
            </div>

            <div className="dress-container">
              {              
                props.size ? props.boxes
                  .filter(box => box.size === props.size)
                  .map((box, index) => (
                    <Box key={index} box={box} addItem ={props.addItem}/>
                  )) :
                  props.boxes        
                  .map((box, index) => (
                    <Box key={index} box={box} addItem ={props.addItem}/>
                  )) 

              }
            </div>

          </div>
      </div>
      );

    }

export default ShoppingCart;
