import React, { useEffect, useState } from 'react'
import BestItems from '../BestItems';
import { getAllItems as getBestItem } from '../firebase';

const BestItemsContainer = () => {

    const [bestItem, setBestItem] = useState([]);
    const [bestItem2, setBestItem2] = useState([]);

    function getRandomItemPos(array) {
        let randomItemPos = Math.round(Math.random()*(array.length-1))
        return randomItemPos
    }

    useEffect( () => {
        getBestItem().then( res => {

            const randomItemPos = getRandomItemPos(res)
            setBestItem(res[randomItemPos])}
        )}, [])

    useEffect( () => {
        getBestItem().then( res => {

            const randomItemPos = getRandomItemPos(res)
            setBestItem2(res[randomItemPos])}
        )}, [])

    return (
        <div className="flex justify-center flex-col mx-5 mb-3 h-70 w-1/4 rounded-lg bg-slate-400/20 backdrop-opacity-10 hover:scale-105 duration-700">
            <h2 className='text-white text-center w-full px-4 pt-4 pb-1 text-3xl tracking-wide font-bold'>Deluxe Items</h2>            
            <div className='flex flex-row justify-center'>
                <BestItems bestItem={bestItem}/>
                <BestItems bestItem={bestItem2}/>
            </div>
        </div>
    )
}

export default BestItemsContainer