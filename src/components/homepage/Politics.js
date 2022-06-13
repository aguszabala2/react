import React from 'react'

const Politics = () => {
    return (
        <div className="mx-5 mb-3 card w-56 bg-blue-600/20 rounded-lg hover:scale-105 duration-700 ">
            <figure className="p-4">
                <img src="https://i.postimg.cc/mg47SLvM/Libuscha.png" alt="Libuscha" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-white pt-1">
                <h2 className="card-title">Free the people of Libuscha!</h2>
            <div className='px-0 text-white text-sm'>
                <p>We, the people of the Libuscha Dome in the Moon, are being kept there with a Government that we didn't choose in poor and unhealthy conditions.</p> 
                <p>Click on the button below to know what you can do for us.</p>
            </div>
                <div className="card-actions">
                    <button className='btn btn-active glass mt-3 w-auto hover:scale-110 text-white-900'>Help us!</button>
                </div>
            </div>
        </div>
    )
}

export default Politics