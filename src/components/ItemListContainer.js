import React, { useEffect, useState } from 'react'
import robotStore from '../data/robotStore'
import ItemList from './ItemList';
import ItemNavbar from './ItemNavbar';
import { useParams } from 'react-router-dom';

function getRobotStore(planetId){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            if(planetId !== undefined) {
                const arrayFiltered = robotStore.filter((robots) => {
                    return robots.planet === planetId
                })
                res(arrayFiltered)
            }
            else{
            res(robotStore)};
        }, 1000)
    })
}

const ItemListContainer = ({name}) => {

    const [robotStore, setRobotStore] = useState([]);
    const {planetId} = useParams();


    useEffect( () => {
        getRobotStore(planetId).then( respuesta => {
            setRobotStore(respuesta)}
        )
    }, [planetId])

    return (
        <>
        <ItemNavbar/>
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
            <ItemList robots={robotStore}/>
        </div>
        </>
    )
}

export default ItemListContainer