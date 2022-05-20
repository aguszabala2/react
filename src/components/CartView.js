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
        <button className='btn btn-active glass m-4 hover:scale-110 text-white-900'><Link to="/employees">Shop</Link></button>
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
                                <figure><img src={itemCart.image} alt="avatar" className='w-auto'/></figure>
                                <div className="card-body">
                                    <h2 className="text-center font-bold text-lg text-white">{itemCart.name} {itemCart.model}</h2>
                                    <p className='text-center text-white'>{itemCart.quant} x {itemCart.price * itemCart.quant}</p>
                                    <button className='btn btn-active glass m-3 hover:scale-110 text-white-900' onClick={() => removeFromCart(itemCart.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-active glass mt-3 m-4 hover:scale-110 text-white-900 text-center' onClick={() => clearCart()}>Remove all</button>
            </div>
            </>
        )
    }
}

export default CartView