import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem as getRobots} from './firebase'

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