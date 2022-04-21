import React from 'react'

const ItemListContainer = ({name}) => {
    return (
        <div tabindex="0" className="collapse">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl font-medium">
                Welcome!
            </div>
            <div className="collapse-content"> 
                <p>Our awesome page is not currently available. Wait for us please.</p>
            </div>
        </div>
    )
}

export default ItemListContainer