import React from 'react';
// import './App.css'
// import logo from './logo.svg';
// import './App.css';

export default function Invoice(props){
  //props shoppingCartItem
  return(
    <div>
      <h1>Invoice</h1>
      {props.shoppingCartItems.map((item,index) => <p>{index+1}.{item.title}</p>)}
    </div>
  )
}