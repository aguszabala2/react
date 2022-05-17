import React from 'react'
import Item from './Item'

function ItemList ({robots}) {
    return (
        <span className='flex flex-wrap justify-center'>
        {robots.map(thisrobot => {
            return(
                <Item robots={thisrobot} key={thisrobot.id}/>
            )
        })}
            <div>{ItemList}</div>
        </span>
    )
}

export default ItemList