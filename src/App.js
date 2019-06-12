import React from 'react';
import Box from './box';
import Popup from 'reactjs-popup'
import PopupButton from './popup'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    boxes: [{
              id : 1,
              imgUrl:"clothes/dress1.jpg",
              title:"Check PInafore Dress",
              originalPrice: 49.95,
              discountedPrice:39.95,
              size: "M"
            },
            {
              id : 2,
              imgUrl:"clothes/dress2.jpg",
              title:"Dream Chaser Button Dress-Rosy",
              originalPrice: 69.95,
              discountedPrice:45.00,
              size: "M"
            },
          {
            id : 3,
            imgUrl:"clothes/dress3.jpg",
            title:"Dream Chaser Button Dress-white",
            originalPrice: 69.95,
            discountedPrice:45.00,
            size: "L"
          },
          {
            id: 4,
            imgUrl:"clothes/dress4.jpg",
            title:"Dream Chaser Button Dress -Black",
            originalPrice: 69.95,
            discountedPrice:45.00,
            size: "L"
          },
          {
            id:5,
            imgUrl:"clothes/dress5.jpg",
            title:"Pleated Skirt Midi Dress",
            originalPrice: 99.95,
            discountedPrice:59.97,
            size: "S"
          },
          {
            id: 6,
            imgUrl:"clothes/dress6.jpg",
            title:"Watercolor Floral Apron Front Dress",
            originalPrice: 89.95,
            discountedPrice: 53.97,
            size: "S"
          }],
    shoppingCartItems: [],
    size: null

  }

  filterBox =(size) => {
    const{ boxes } = this.state
    this.setState({ 
      boxes: boxes.filter((box)=> box.size == size)
    })

  }

  changeSize = (size) => {
    this.setState({ size })
  }

  sortOrder = (e) =>{
    const{ boxes } = this.state
    let option = e.target.value
    if(option == 1){
        // sort price the low to high 
        this.setState({
          boxes: [...boxes].sort((a, b) => (a.discountedPrice - b.discountedPrice) )
        })
    }else{
        // sort price the high to low
        this.setState({
          boxes: [...boxes].sort((a, b) => (b.discountedPrice - a.discountedPrice) )
        })
    }

  }
  addItem = (box) =>{
    const{ boxes, shoppingCartItems } = this.state
    box = {...box,quantity:1}
    this.setState({ 
      shoppingCartItems: [...shoppingCartItems, box]
    })

  }

  removeItem = (index) =>{
    const{ boxes, shoppingCartItems } = this.state
    this.setState({ 
      shoppingCartItems: shoppingCartItems.filter((item,i)=> i !== index)
    })

  }
  render(){
      const { boxes, size,shoppingCartItems } = this.state     
      return (
        <div className="App">
          <header>
            <h1>Dress Shop</h1>
          </header>
          <div className="sub-header">
            <div className="sorter">
              <label htmlFor="">Order by</label>
              <div className="select-box">    
                <select onChange={this.sortOrder}>
                  <option value="0">select</option>
                  <option value="1">price lowest to highest</option>
                  <option value="2">price highest to lowest</option>            
                </select>
                </div>
            </div>

            <div className="cart">
              {<PopupButton items ={shoppingCartItems} remove={this.removeItem}/>}
              
            </div>

          </div>

          <div className="container">
            <div className="sidebar">
              <label htmlFor="">Size</label>
              <div>
                <button onClick = {() => this.changeSize("S")}>S</button>
                <button onClick ={() => this.changeSize("M")}>M</button>
                <button onClick ={() => this.changeSize("L")}>L</button>
                <button onClick ={() => this.changeSize(null)}>All</button>
              </div>
            </div>

            <div className="dress-container">
              {              
                size ? boxes
                  .filter(box => box.size === size)
                  .map((box, index) => (
                    <Box key={index} box={box} addItem ={this.addItem}/>
                  )) :
                  boxes        
                  .map((box, index) => (
                    <Box key={index} box={box} addItem ={this.addItem}/>
                  )) 

              }
            </div>

          </div>
      </div>
      );

    }
}

export default App;

