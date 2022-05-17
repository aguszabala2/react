import React from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext'

function CartView() {
    const {cart, removeFromCart, clearCart} = useCartContext()
    console.log("CART:", cart);

    if(cart.length === 0) {
    return (
        <>
        <div className='text-center text-white mt-4'>This cart is empty</div>
        <button className='btn btn-active text-white m-4 glass'><Link to="/employees">Shop</Link></button>
        </>

    )}else{
        return (
            <>
            <div className='flex flex-wrap justify-center'>
                {cart.map(itemCart => {
                    return (
                        <>
                        <div className='flex justify-center'>
                            <div className="card w-64 glass m-4">
                                <figure><img src={itemCart.avatar} alt="avatar" className='w-auto'/></figure>
                                <div className="card-body">
                                    <h2 className="text-center font-bold text-lg text-white">{itemCart.name} {itemCart.model}</h2>
                                    <p className='text-center text-white'>{itemCart.quant}</p>
                                    <p className='text-center text-white'>{itemCart.price * itemCart.quant}</p>
                                    <button className='btn btn-active w-auto m-3 glass' onClick={() => removeFromCart(itemCart.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-active text-white glass text-center m-4' onClick={() => clearCart()}>Remove all items</button>
            </div>
            </>
        )
    }
}

export default CartView