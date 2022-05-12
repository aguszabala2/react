import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({robots}) => {
    const [isInCart, setIsInCart] = useState(false)

    function onAdd(count){
        console.log(`Agregue al carrito ${count} items`);
        setIsInCart(true)
    }

    return (
        <div className='flex justify-center'>
            <div className="card w-1/3 glass m-4">
                <figure><img src={robots.avatar} alt="avatar" className='w-auto'/></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-lg">{robots.name} {robots.model}</h2>
                    <p className='text-center'>{robots.planet}</p>
                    <p className='text-center'>{robots.owner}</p>
                    <p className='text-center text-black'>{robots.price} /per week</p>
                    {isInCart? 
                        <Link to="/cart">
                        <button class="btn btn-active glass mt-3 hover:text-lg">CART</button>
                        </Link>
                    :
                        <ItemCount onAdd={onAdd} stock={robots.stock}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail