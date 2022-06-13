import React from 'react'
import News from '../News'

const NewsContainer = () => {
    return (
        <div className='m-5 h-70 w-auto rounded-lg bg-slate-400/20 hover:scale-105 duration-700 backdrop-opacity-10'>
            <div className="carousel rounded-lg">
                <div id="news1" className="carousel-item w-full">
                    <News/>
                </div> 
                <div id="news2" className="carousel-item w-full">
                    <News/>
                </div> 
                <div id="news3" className="carousel-item w-full">
                    <News/>
                </div> 
                <div id="news4" className="carousel-item w-full">
                    <News/>
                </div>
                </div> 
            <div className="flex justify-center bg-transparent py-2 gap-2">
                <a href="#news1" className="btn btn-xs">1</a> 
                <a href="#news2" className="btn btn-xs">2</a> 
                <a href="#news3" className="btn btn-xs">3</a> 
                <a href="#news4" className="btn btn-xs">4</a>
            </div>
        </div>
    )
}

export default NewsContainer