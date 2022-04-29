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
                <p>We can give you what your company needs. Employees, spaceships, event and travel tickets or even new lands for your expansion.</p>
                <p>We are the company of your future.</p>
            </div>
            <ItemList personal={personalList}/>
        </div>
    )
}

export default ItemListContainer