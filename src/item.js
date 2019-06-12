import React from 'react';
// import './App.css'
// import logo from './logo.svg';


export default function Item(props){
  // props :
  // item 
  // key 
  // remove 
  return ( 
      <div className="shoppingcart-item">
        <div className="img">
          <img src={props.item.imgUrl} alt=""/>
        </div>
        <div className="descriptions">
          <p>{props.item.title}</p>
          <p><span>size: {props.item.size}</span> quantity: {props.item.quantity}</p>
        </div>
        <p className="discounted-price"><span>$</span> {props.item.discountedPrice}</p>
        <span className="close" onClick={()=> props.remove(props.index)} >x</span>
      </div>  
  )
}