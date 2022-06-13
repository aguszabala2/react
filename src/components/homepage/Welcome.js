import React from "react"

const Welcome = () => {

    return (
            <div className="mx-5 hero h-70 w-auto rounded-lg bg-slate-400/20 backdrop-opacity-10 hover:scale-105 duration-700 hover:backdrop-opacity-10">
                <div className="hero-content flex">
                    <img src="https://64.media.tumblr.com/7149c1879380cbcf85dbb06b8ff539b4/ef74e51f0912c61c-77/s640x960/8ef34560ce9891ef686c6d161d9bc0f83e377c9f.pnj" alt="Zebulon Graydon" className="h-52 object-left object-contain rounded-lg shadow-2xl" />
                    <div className="object-right">
                        <h1 className="text-4xl text-white font-bold">Hello Costumer!</h1>
                        <p className="py-2 text-white">Our president, Mr. Zebulon Graydon, gives you his salutations and wishes you a good shopping.</p>
                        <p className="py-2 text-white">He is now in our Homebase in Mars developing new articles for the benefit of the galaxy and the business man of this vast Universe.</p>
                    </div>
                </div>
            </div>
    )
}

export default Welcome