import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    const substractHandler = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const clickHandler = () => {
        onAdd(count);
    }

    const addHandler = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="stats shadow glass w-auto mt-5">
                <div className="stat place-items-center">
                    <button onClick={substractHandler} className="stat-value text-white">-</button>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-value text-slate-400">{count}</div>
                </div>
                <div className="stat place-items-center">
                    <button onClick={addHandler} className="stat-value text-white">+</button>
                </div>
            </div>
            <button onClick={clickHandler} className="btn btn-active glass mt-3 hover:text-lg text-white-900 font-bold">HIRE NOW</button>
        </>
    )
}

export default ItemCount