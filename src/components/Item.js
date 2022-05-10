import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({robots}) => {
    return (
        <div className="card w-96 glass m-4">
            <figure><img src={robots.avatar} alt="avatar"/></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{robots.name} {robots.model}</h2>
                <p className='text-center'>{robots.planet}</p>
                <p className='text-center'>{robots.owner}</p>
                <Link to={`/employees/${robots.id}`}>
                <button class="btn btn-active glass mt-3 hover:text-lg">MORE</button>
                </Link>
            </div>
        </div>
    )
}

export default Item