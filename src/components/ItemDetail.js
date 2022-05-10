import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({robots}) => {

    return (
        <div className='flex justify-center'>
            <div className="card w-1/3 glass m-4">
                <figure><img src={robots.avatar} alt="avatar" className='w-auto'/></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-lg">{robots.name} {robots.model}</h2>
                    <p className='text-center'>{robots.planet}</p>
                    <p className='text-center'>{robots.owner}</p>
                    <p className='text-center text-black'>{robots.price} /per week</p>
                    <ItemCount stock={robots.stock}/>
                    <button className="btn btn-active glass mt-3 hover:text-lg text-blue-900 font-bold">HIRE NOW</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail