import React from 'react'
import Announce from './homepage/Announce'
import BestItemsContainer from './homepage/BestItemsContainer'
import NewsContainer from './homepage/NewsContainer'
import Politics from './homepage/Politics'
import Welcome from './homepage/Welcome'

const Homepage = () => {
    return (
        <div>
            <Announce/>
            <div className='flex flex-wrap justify-center items-start flex-row'>
                <div className='w-1/2'>
                    <Welcome/>
                    <NewsContainer/>
                </div>
                <Politics/>
                <BestItemsContainer/>
            </div>
        </div>
    )
}

export default Homepage