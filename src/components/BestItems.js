import React from 'react'
import { Link } from 'react-router-dom'

function BestItems ({bestItem}) {
    return (
        <div className="heartbeat card w-44 h-auto glass m-4">
            <figure><img src={bestItem.image} alt="avatar"/></figure>
            <div className="p-4">
                <h2 className="text-center text-white font-bold text-lg">{bestItem.name} {bestItem.model}</h2>
                <p className='text-center text-white'>{bestItem.location}</p>
                <p className='text-center text-white'>{bestItem.company}</p>
                <Link to={`/workers/${bestItem.id}`}>
                <button className="btn btn-active glass mt-3 text-white hover:scale-110">MORE</button>
                </Link>
            </div>
        </div>
    )
}

export default BestItems