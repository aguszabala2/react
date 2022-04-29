import React, { useState } from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

    const substractHandler = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const addHandler = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="stats shadow bg-white m-4">
                <div className="stat place-items-center">
                    <button onClick={substractHandler} className="stat-value">-</button>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-value text-primary">{count}</div>
                </div>
                <div className="stat place-items-center">
                    <button onClick={addHandler} className="stat-value">+</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount