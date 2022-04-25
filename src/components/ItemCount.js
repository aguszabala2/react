import React, { useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const subHandler = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const addHandler = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div class="stats shadow backdrop-filter backdrop-blur-lg bg-white">
                <div class="stat place-items-center">
                    <button onClick={subHandler} class="stat-value">-</button>
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