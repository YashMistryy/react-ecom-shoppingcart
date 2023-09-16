/* eslint-disable react-hooks/exhaustive-deps */
// Home page of out app which shows a list of objects/items for user to purchase/addToCart
import React from 'react'
import { useEffect,useState } from 'react'
function ShopPage() {
const [prodData,SetProdData] = useState([])
useEffect(
    ()=>{
        fetch('https://fakestoreapi.com/products')
        .then((respnse)=>{return respnse.json()})
        .then((jsondata)=>{SetProdData(jsondata)})
    }
,[])

console.log(prodData);
  return (
    <div>Instamart!</div>
  )
}

export default ShopPage