import React, { useEffect, useState } from 'react'
import personalList from '../data/personalList'
import ItemDetail from './ItemDetail';

function getPersonal(){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            // const personFound = personalList.find((personal) =>{
            //     return id === personal.id
            // })
            // res(personFound);
            res(personalList)
        }, 1000)
    })
}

const ItemDetailContainer = () => {

    const [personal, setPersonal] = useState([]);

    useEffect( () => {
        getPersonal().then( respuesta => {
            setPersonal(respuesta[0])}
        )
    }, [])

    return (
        <div tabIndex="0" className="collapse text-slate-100">
            <ItemDetail personal={personal}/>
        </div>
    )
}

export default ItemDetailContainer