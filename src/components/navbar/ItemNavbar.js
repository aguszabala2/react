import React from 'react'
import { Link } from 'react-router-dom'

const ItemNavbar = () => {
    return (
        <div className="navbar bg-opacity-30 bg-transparent text-slate-100 px-20 flex justify-center">
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg z-40">
                    <a>Home
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></a>
                    <ul className="bg-opacity-90 bg-black w-full text-slate-100 z-40">
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/location/Earth">Earth</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/location/ISS">ISS</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/location/Mars">Mars</Link></li>
                        <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/location/Moon">Moon</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemNavbar