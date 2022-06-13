import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartContext from '../context/CartContext'

const ItemDetail = ({robots}) => {
    const [isInCart, setIsInCart] = useState(false)
    const {addToCart} = useCartContext();

    function onAdd(count){

        setIsInCart(true)
        addToCart(robots, count)
        console.log('Aregado al cart', robots, count)
    }

    if(!robots){
        return (
            <div className='flex justify-center m-5'>
                <button className="btn btn-square glass loading"></button>
            </div>
        )
    }

    return (
        <div className='flex justify-center'>
            <div className="card w-1/3 glass m-4">
                <figure><img src={robots.image} alt={robots.name} className='w-auto'/></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-lg">{robots.name} {robots.model}</h2>
                    <p className='text-center'>{robots.location}</p>
                    <p className='text-center'>{robots.company}</p>
                    <p className='text-center text-yellow-400'>{robots.price} /per week</p>
                    {isInCart?
                        <>
                        <Link to="/cart">
                        <button className="btn btn-active glass mt-3 hover:scale-110">CART</button>
                        </Link>
                        <Link to="/workers"><button className='btn btn-active glass mt-3 w-auto hover:scale-110 text-white-900'>Keep shopping</button></Link>
                        </>
                    :
                        <ItemCount onAdd={onAdd} stock={robots.stock}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail