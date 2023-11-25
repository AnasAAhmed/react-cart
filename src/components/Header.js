import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi";
import { useSelector } from "react-redux"

const Header = () => {
  const {cartitems}= useSelector(state=>state.cart)
  return (
   <nav> 
    <h2>Logo here.</h2>
    <div> 
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"} ><FiShoppingBag/><p>{cartitems.length}</p></Link>
    </div>
   </nav>
  )
}

export default Header
