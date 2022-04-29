import React from 'react'

const ItemDetail = ({personal}) => {
    return (
        <div className="card w-1/3 glass m-4">
            <figure><img src={personal.avatar} alt="avatar" className='w-1/4'/></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{personal.firstName} {personal.lastName}</h2>
                <p className='text-center'>{personal.company}</p>
                <p className='text-center'>{personal.work}</p>
                <p className='text-center'>{personal.salary}/per week</p>
                <button class="btn btn-active glass mt-3 hover:text-lg">HIRE NOW</button>
            </div>
        </div>
    )
}

export default ItemDetail