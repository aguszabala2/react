import React from 'react'
import { Link } from 'react-router-dom'

const ItemNavbar = () => {
    return (
        <div class="navbar bg-opacity-30 bg-transparent text-slate-100 px-20 flex justify-center">
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg z-40">
                    <a>Home
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul class="bg-opacity-90 bg-black w-full text-slate-100 z-40">
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/planet/Earth">Earth</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/planet/ISS">ISS</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/planet/Mars">Mars</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/planet/Moon">Moon</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemNavbar