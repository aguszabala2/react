import React from "react"

const Welcome = ({name}) => {

    return (
        <div tabIndex="0" className="collapse text-slate-100">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl font-medium">
                Welcome {name}!
            </div>
            <div className="collapse-content"> 
                <p>We can give you what your company needs. Employees, spaceships, event and travel tickets or even new lands for your expansion.</p>
                <p>We are the company of your future.</p>
            </div>
        </div>
    )
}

export default Welcome