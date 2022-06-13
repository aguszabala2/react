import React, { useEffect, useState } from 'react'
import { getAllItems as getRobotStore, getItemsByLocation as getRobotsByLocation } from './firebase';
import ItemList from './ItemList';
import ItemNavbar from './navbar/ItemNavbar';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [robotStore, setRobotStore] = useState([]);
    const {locationId} = useParams();

    useEffect( () => {
        if (!locationId) {
        getRobotStore().then( res => {
            setRobotStore(res)}
        )}
        else {
            getRobotsByLocation(locationId).then( res => {
                setRobotStore(res)}
            )}
    }, [locationId])

    return (
        <>
        <ItemNavbar/>
        <div tabIndex="0" className="collapse text-slate-100">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl font-medium">
                Welcome!
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