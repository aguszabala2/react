import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const DaisyNavbar = () => {
    const {contextFunction} = useContext(CartContext);
    return (
    <div className="navbar backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-slate-100 px-20">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case tracking-wider font-thin hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg font-logo">GRAYDON CORP.</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><Link to="/employees">Employees
                </Link></li>
                {/* Aun falta definir estas paginas */}
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><a>Ships</a></li>
                <li className="hover:bg-slate-100 hover:bg-opacity-10 hover:rounded-lg"><a>About Us</a></li>
            </ul>
            <CartWidget/>
        </div>
    </div>
    )
}

export default DaisyNavbar