import React from 'react'

const Item = ({personal}) => {
    return (
        <div class="card w-96 glass">
            <figure><img src={personal.avatar} alt="avatar"/></figure>
            <div class="card-body">
                <h2 class="card-title">{personal.firstName} {personal.lastName}</h2>
                <p>{personal.company}</p>
            </div>
        </div>
    )
}

export default Item