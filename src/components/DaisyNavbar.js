import React from 'react'
import CartWidget from './CartWidget'

const DaisyNavbar = () => {
    return (
    <div className="navbar backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-slate-100 px-20">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case tracking-wider font-thin hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg font-logo">GRAYDON CORP.</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><a>Lands</a></li>
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><a>Travel</a></li>
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><a>About Us</a></li>
            </ul>
            <CartWidget/>
        </div>
    </div>
    )
}

export default DaisyNavbar