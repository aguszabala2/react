import React, { useEffect, useState } from 'react'
import personalList from '../data/personalList'
import ItemList from './ItemList';

function getPersonalList(){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(personalList);
        }, 500)
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
                <p>Our awesome page is not currently available. Wait for us please.</p>
            </div>
            <ItemList personal={personalList}/>
        </div>
    )
}

export default ItemListContainer