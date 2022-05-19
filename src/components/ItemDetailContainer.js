import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import robotStore from '../data/robotStore'
import ItemDetail from './ItemDetail';
import { getItem as getRobots} from './firebase'

// function getRobots(id){
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             const robotFound = robotStore.find((robots) =>{
//                 return parseInt(id) === robots.id
//             })
//             res(robotFound);
//         }, 1000)
//     })
// }

const ItemDetailContainer = () => {
    
    const [robots, setRobots] = useState();
    const { robotsId } = useParams()

    useEffect( () => {
        getRobots(robotsId).then( respuesta => {
            setRobots(respuesta)}
        )
    }, [robotsId])

    return (
        <div tabIndex="0" className="collapse text-slate-100">
            <ItemDetail robots={robots}/>
        </div>
    )
}

export default ItemDetailContainer