import React from 'react';
// import './App.css'
// import logo from './logo.svg';
// import './App.css';

export default function Box(props){
  // props :
  // key={index}
  // box={box}
  // addItem ={this.addItem}
  return (
    <div className="dress-box">
      <div>
        <img src={props.box.imgUrl} alt=""/>
        <p className="orignal-price"><span>$</span> {props.box.originalPrice}</p>
        <p className="discounted-price"><span>$</span> {props.box.discountedPrice}</p>
      </div>
      <button onClick = {() => props.addItem(props.box)}>Add to Cart</button>
     
    </div>
  )
}