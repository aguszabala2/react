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
            <div class="stats shadow bg-white">
                <div class="stat place-items-center">
                    <button onClick={substractHandler} class="stat-value">-</button>
                </div>
                <div class="stat place-items-center">
                    <div class="stat-value text-primary">{count}</div>
                </div>
                <div class="stat place-items-center">
                    <button onClick={addHandler} class="stat-value">+</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount