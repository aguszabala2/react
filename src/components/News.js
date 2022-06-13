import React from 'react'

const News = () => {
    return (
        <div class="card card-side bg-slate-400/20 rounded-lg w-full">
            <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"/></figure>
            <div class="card-body text-white">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                <button className='btn btn-active glass mt-3 w-auto hover:scale-110 text-white-900'>Know more</button>
                </div>
            </div>
        </div>
    )
}

export default News