import React from 'react'
import Item from './Item'

const ItemList = ({personal}) => {
    return (
        <span>
        {personal.map(thisperson => {
            return(
                <Item personal={thisperson} key={thisperson.id}/>
            )
        })}
            <div>{ItemList}</div>
        </span>
    )
}

export default ItemList