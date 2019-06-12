import React from 'react';
// import './App.css'
// import logo from './logo.svg';


export default function Item(props){
  // props :
  // item 
  // key 
  return ( 
      <div className="shoppingcart-item">
        <img src={props.item.imgUrl} alt=""/>
        <p className="discounted-price"><span>$</span> {props.item.discountedPrice}</p>
        <span>x</span>
      </div>  
  )
}