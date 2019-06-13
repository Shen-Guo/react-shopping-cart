import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Invoice from './invoice'
// import logo from './logo.svg';
import ShoppingCart from './ShoppingCart'
import './App.css';

export default class App extends React.Component {

  state ={
    boxes: [],
    shoppingCartItems: [],
    size: null
  }
  componentDidMount() {
    // fetch('/endpoint')
    //   .then(res => res.json())
    //   .then(res => this.setState({ boxes: res.boxes }))
    const url ="http://localhost:8888/api/dresses"// front end
    fetch(url).then(res => res.json())
              .then(res => this.setState({ boxes: res.boxes,
                                          shoppingCartItems:res.shoppingCartItems, size: res.size}))
                
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
    const{ shoppingCartItems } = this.state
    let ids = []
    shoppingCartItems.forEach(box =>{
      ids.push(box.id)
    })
    
    if(!ids.includes(box.id)){
      box = {...box,quantity:1}
      this.setState({ 
        shoppingCartItems: [...shoppingCartItems, box]
      })
    }else{
      // increase the quantity not adding the box
      shoppingCartItems.find(item => item.id === box.id).quantity += 1
      this.setState({ shoppingCartItems })
    }

  }

  removeItem = (index) =>{
    const{ boxes, shoppingCartItems } = this.state
    this.setState({ 
      shoppingCartItems: shoppingCartItems.filter((item,i)=> i !== index)
    })

  }


  render(){
    const{ boxes,shoppingCartItems,size } = this.state
    return (
      <Switch>
        <Route path='/invoice' render={()=><Invoice shoppingCartItems={shoppingCartItems}/>} />
        <Route path='/' render={() => {
          return <ShoppingCart filterBox={this.filterBox} 
                               changeSize={this.changeSize}
                               sortOrder={this.sortOrder}
                               addItem={this.addItem}
                               removeItem={this.removeItem}
                               boxes={boxes}
                               shoppingCartItems={shoppingCartItems}
                               size={size}/>
        }} />
      </Switch>
    )

  }
  }
