import React from 'react'

const ItemList = ({personal}) => {
    return (
        <div>
        {personal.map(thisperson => {
            return(
                <div>
                    <h1>{thisperson.firstName} {thisperson.lastName}</h1>
                    <p>{thisperson.company}</p>
                </div>
            )
        })}
            <div>{ItemList}</div>
        </div>
    )
}

export default ItemList