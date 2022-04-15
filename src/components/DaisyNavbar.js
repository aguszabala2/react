import React from 'react'

const DaisyNavbar = () => {
    return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Graydon Corp.</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><a>Lands</a></li>
                <li><a>Travel</a></li>
                <li><a>About Us</a></li>
            </ul>
        </div>
    </div>
    )
}

export default DaisyNavbar