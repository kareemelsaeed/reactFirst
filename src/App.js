import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import s1 from "./Photos/s1.jpg"
import s2 from "./Photos/s2.jpg"
import s3 from "./Photos/s3.jpg"
import s4 from "./Photos/s4.jpg"
import t1 from "./Photos/t1.jpg"
import t2 from "./Photos/t2.jpg"
import t3 from "./Photos/t3.jpg"
import t4 from "./Photos/t4.jpg"
import shopC1 from "./Photos/shopC1.jpg"
import shopC2 from "./Photos/shopC2.jpg"
import shopC3 from "./Photos/shopC3.jpg"
import shopC4 from "./Photos/shopC4.jpg"
import shopC5 from "./Photos/shopC5.jpg"
import shopC6 from "./Photos/shopC6.jpg"
import shopC7 from "./Photos/shopC7.jpg"
import shopC8 from "./Photos/shopC8.jpg"
import Cart from "./Components/Cart";
import Naav from "./Components/Naav";




const App = ()=>{

  const [mainProducts,setMainProducts] = useState([
    { id: 1, photo: s1, type: "Clothing", items: 5},
    { id: 2, photo: s2, type: "Bag Brand", items: 20},
    { id: 3, photo: s3, type: "Accessories ", items: 6},
    { id: 4, photo: s4, type: "Shoes ", items: 8},
  ]) 

  const [bestSell,setBestSell] = useState([
    { id: 1, photo: t1, type: "Quilted Gilet With Hood", price: 150 },
    { id: 2, photo: t2, type: "Quilted Gilet With Hood", price: 110 },
    { id: 3, photo: t3, type: "Quilted Gilet With Hood", price: 200 },
    { id: 4, photo: t4, type: "Quilted Gilet With Hood", price: 250 },
  ])

  const [shop, setShop] = useState([
    { id:1, photo:shopC1, type:"Hood", price:100 , buyQty:0},
    { id:2, photo:shopC2, type:"Shirt", price:120 , buyQty:0},
    { id:3, photo:shopC3, type:"Shirt", price:150 , buyQty:0},
    { id:4, photo:shopC4, type:"Shirt", price:210 , buyQty:0},
    { id:5, photo:shopC5, type:"Shirt", price:200 , buyQty:0},
    { id:6, photo:shopC6, type:"Shirt", price:250 , buyQty:0},
    { id:7, photo:shopC7, type:"Jeans", price:320 , buyQty:0},
    { id:8, photo:shopC8, type:"Jeans", price:350 , buyQty:0},
    { id:9, photo:shopC1, type:"Hood", price:105 , buyQty:0},

  ])

  const [count, setCount] =useState(0)

  const [addCart , setaddCart] = useState()

  let add = (obj)=>{
    setCount(count + 1)
    let x = shop.map((e)=>{
      if (obj.id == e.id) {
        e.buyQty++;
      }
      return e
    })
    let y = x.filter((e) => e.buyQty > 0)
    setaddCart(y)
  }
  
  let del = (obj)=>{
    console.log(obj);
    let x = addCart.filter((e)=> obj.id != e.id )
    setaddCart(x)
    let y = count - obj.buyQty
    setCount(y)
  }

  let plus = (obj)=>{
    let x = addCart.map((e)=>{
      if (obj.id == e.id) {
        e.buyQty++
      }
      return e
    })
    setaddCart(x)
    setCount(count + 1)
  }

  let mines = (obj)=>{
    let x = addCart.map((e)=>{
      if (obj.id == e.id) {
        e.buyQty--
      }
      return e
    })
    setaddCart(x)
    setCount(count - 1)
  }

  const [price, setPrice] =useState(0)

  let calc = ()=>{
    let x = addCart.map((e)=> e.buyQty * e.price)
    let y = x.join('+')
    let z = eval(y)
    setPrice(z)
  }

  return(
    <div >

   
      <Naav count={count}/>



      <Routes>
        <Route path="/" element={<Home mainProducts={mainProducts}  bestSell={bestSell} />}/> 
        <Route path="/Shop" element={<Shop shop={shop} add={add}/>}/>
        <Route path="/Cart" element={<Cart add={add} addCart={addCart} count={count} del={del} plus={plus} mines={mines} calc={calc} price={price}/> }/>
      </Routes>  
    </div>
  )
}

export default App;