import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';



const Cart = () => {
    const { cartitems,subTotal,shipping,tax,total } = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const increment = (id) => {
        dispatch({
            type: "addToCart", payload: { id }
        })
        dispatch({ type: "calculate" })
    }
    const decrement = (id) => {
        dispatch({
            type: "decrement", payload: id
        })
        dispatch({ type: "calculate" })
    }
    const deleteHandler = (id) => {
        dispatch({
            type: "delete", payload: id
        })
        dispatch({ type: "calculate" })
    }
    return (
        <div className='cart'>
            <main>
                {
                    cartitems.length > 0 ? (
                        cartitems.map(i => (
                            <Cartitem imgSrc={i.imgSrc} price={i.price} name={i.name} qty={i.quantity} key={i.id} id={i.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler} />
                        ))
                    ) : <h1>No Items</h1>
                }

            </main>
            <aside>
                <h2>Subtotal:${subTotal}</h2>
                <h2>Shipping:${shipping}</h2>
                <h2>Tax:${tax}</h2>
                <h2>Total:${total }</h2>
            </aside>
        </div>
    )
}

const Cartitem = ({ imgSrc, price, name, qty, increment, decrement, deleteHandler, id }) => {
    return (

        <div className="cartitem">
            <img src={imgSrc} alt="Item" />
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>
            <div>
                <button onClick={() => increment(id)}>+</button>
                <p>{qty}</p>
                <button onClick={() => decrement(id)}>-</button>
            </div>

            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>

    )
}

export default Cart
