import React from 'react'
import {toast} from "react-hot-toast"
import { useDispatch } from 'react-redux';



const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/f/l/10-snk-mcw-303-red-10-bruton-red-original-imagu74bebn2zztv.jpeg?q=70";

  
const Home = () => {

  const productList =[ 
    {name:"Mac Book",price:12000,imgSrc:img1,id:"siffjfsdjsdjfsdjkb"},
    {name:"Black Shoes",price:490,imgSrc:img2,id:"sifssssssssfjfsdjsdjfsdjkb"},
   
   
  ];

   const dispatch = useDispatch()


  const addToHandlerCart =(options)=>{ 
    
    dispatch({type:"addToCart",payload:options})
    dispatch({type:"calculate"}) 
    toast.success("Added To Cart")
  }

  return (
    <div className="home">
     { productList.map((i)=>( 
      <ProductCard key={i.id} id={i.id} name={i.name} price={i.price} 
      imgSrc={i.imgSrc} handler={addToHandlerCart}/>
     ))
     
     }
    </div>
  )
}
const ProductCard =({name,id,price,imgSrc,handler})=>( 
<div className="productCard">
   <img src={imgSrc} alt={name} />
   <p>{name}</p>
   <h4>${price}</h4>
   <button onClick={()=>handler({name,price,id,imgSrc,quantity:1})}>Add To Cart</button>
</div>
)

export default Home
