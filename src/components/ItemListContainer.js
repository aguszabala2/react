import React, { useEffect, useState } from 'react'
import personalList from '../data/personalList'
import ItemList from './ItemList';

function getPersonalList(){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(personalList);
        }, 1000)
    })
}

const ItemListContainer = ({name}) => {

    const [personalList, setPersonalList] = useState([]);

    useEffect( () => {
        getPersonalList().then( respuesta => {
            setPersonalList(respuesta)}
        )
    }, [])

    return (
        <div tabindex="0" className="collapse text-slate-100">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl font-medium">
                Welcome {name}!
            </div>
            <div className="collapse-content"> 
                <p>These are all the robots you can hire to work in your company.</p>
                <p>They were selected as the most redituables models of all the markets in the galaxy, so you will be choosing into the best of the best.</p>
                <p>Enjoy!.</p>
            </div>
            <ItemList personal={personalList}/>
        </div>
    )
}

export default ItemListContainer