import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import personalList from '../data/personalList'
import ItemDetail from './ItemDetail';

function getPersonal(id){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            const personFound = personalList.find((personal) =>{
                return parseInt(id) === personal.id
            })
            res(personFound);
            // res(personalList)
        }, 1000)
    })
}

const ItemDetailContainer = () => {

    const [personal, setPersonal] = useState([]);
    const { personalId } = useParams()

    useEffect( () => {
        getPersonal(personalId).then( respuesta => {
            setPersonal(respuesta[0])}
        )
    }, [personalId])

    return (
        <div tabIndex="0" className="collapse text-slate-100">
            <ItemDetail personal={personal}/>
        </div>
    )
}

export default ItemDetailContainer