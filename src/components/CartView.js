import React from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext'

function CartView() {
    const {cart, removeFromCart, clearCart} = useCartContext()
    console.log("CART:", cart);

    if(cart.length === 0) {
    return (
        <>
        <div className='text-center text-white mt-4'>No hay items</div>
        <button className='btn btn-active text-white m-4'><Link to="/employees">Shop</Link></button>
        </>

    )}else{
        return (
            <div>
                {cart.map(itemCart => {
                    return (
                        <>
                            <div className='text-center text-white m1'>
                                <br/>
                                <h2>{itemCart.id}</h2>
                                <h2>{itemCart.name}</h2>
                                <h2>{itemCart.quant}</h2>
                                <h2>{itemCart.price * itemCart.quant}</h2>
                                <button className='btn btn-active' onClick={() => removeFromCart(itemCart.id)}>X</button>
                                <br/>
                            </div>
                            <button className='btn btn-active text-white text-center m-4' onClick={() => clearCart()}>Remove all items</button>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default CartView