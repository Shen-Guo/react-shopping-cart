import React from 'react'
import Popup from 'reactjs-popup'
import Item from './item';
import './popup.css';

export default function PopupButton(props) {
  // props items ---shoppingCartItem
  //       remove --- removeItem
  let totalPrice = props.items.reduce((total,item)=> total + item.discountedPrice*item.quantity,0);
  let count = props.items.reduce((total,item)=>total + item.quantity,0)
  return (
    <Popup className ="popup-button"
          trigger={<button className="trigger-btn">🛒 <span>{count}</span></button>} position="left top"
         >
      {close => (
        <div className="shopping-cart">
          {/* pop out content here */}
          {props.items.map((item, index) => (
            <Item className="shopping-cart-item" item={item} key={index} remove={props.remove} index={index}/>
           )) 
           }
          <div className="sub-total">
            <p>SUBTOTAL:</p>
            <p><span>$</span> {totalPrice.toFixed(2)}</p>
          </div>
          <div className="checkout">
            <button className="checkout-btn">Check Out</button>
          </div>
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  )
}
