import React from 'react'

const Item = ({personal}) => {
    return (
        <div className="card w-96 glass m-4">
            <figure><img src={personal.avatar} alt="avatar"/></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{personal.firstName} {personal.lastName}</h2>
                <p className='text-center'>{personal.company}</p>
                <p className='text-center'>{personal.work}</p>
            </div>
        </div>
    )
}

export default Item